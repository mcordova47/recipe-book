module Handlers.Auth
    ( login
    , signup
    ) where

import Protolude hiding (from)

import Control.Monad.IO.Class (liftIO)
import Crypto.BCrypt
    ( HashingPolicy(..)
    , defaultHashAlgorithm
    , hashPasswordUsingPolicy
    , validatePassword
    )
import qualified Data.ByteString.Char8 as B
import qualified Data.Text as T
import Database.Esqueleto
    ( Entity(..)
    , from
    , fromSqlKey
    , insert
    , select
    , val
    , where_
    , (==.)
    , (^.)
    )
import JWT (Token, buildSimpleJWT)
import Servant (err400, err401, err500)

import Sql (sql)
import Types (AppM)
import Types.Auth (LoginReq(..), SignupReq(..), UserId(..))
import Types.Persist (EntityField(UserEntityUsername), UserEntity(..))

login :: AppM r m => LoginReq -> m Token
login LoginReq{ username, password } = do
    users <- sql $ select $ from $ \u -> do
        where_ (u ^. UserEntityUsername ==. val username)
        pure u
    case users of
        Right [Entity key user]
            | validatePassword (B.pack $ T.unpack $ userEntityPassword user) (B.pack $ T.unpack $ password) ->
                let userId = UserId $ fromIntegral $ fromSqlKey key
                in buildSimpleJWT userId (show $ unUserId userId)
        _ ->
            throwError err401

signup :: AppM r m => SignupReq -> m Token
signup SignupReq{ username, password, confirmPassword }
    | password == confirmPassword = do
        let policy = HashingPolicy 8 defaultHashAlgorithm
        mHashedPassword <- liftIO $ hashPasswordUsingPolicy policy (B.pack (T.unpack password))
        case mHashedPassword of
            Just hashedPassword -> do
                eitherUserKey <- sql $ insert UserEntity
                    { userEntityUsername = username
                    , userEntityPassword = T.pack $ B.unpack hashedPassword
                    , userEntitySuperuser = False
                    }
                case eitherUserKey of
                    Right userKey ->
                        let userId = UserId $ fromIntegral $ fromSqlKey userKey
                        in buildSimpleJWT userId $ show $ unUserId userId
                    _ ->
                        throwError err500
            _ ->
                throwError err500
    | otherwise =
        throwError err400
