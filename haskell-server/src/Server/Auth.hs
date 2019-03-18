module Server.Auth (authServer) where

import Protolude

import Control.Monad.Reader (ReaderT)
import JWT (Token, buildSimpleJWT)
import Servant (Handler, ServerT)
import Servant.API ((:<|>)(..))

import API.Auth (AuthAPI)
import Types.Auth (JWTContext, LoginReq, SignupReq, UserId(..))

authServer :: ServerT AuthAPI (ReaderT JWTContext Handler)
authServer =
    login :<|> signup
    where
        login :: LoginReq -> ReaderT JWTContext Handler Token
        login _ = do
            let userId = UserId { unUserId = 1 }
            buildSimpleJWT userId (show $ unUserId userId)

        signup :: SignupReq -> ReaderT JWTContext Handler Token
        signup _ = do
            let userId = UserId { unUserId = 1 }
            buildSimpleJWT userId (show $ unUserId userId)
