module Server.Auth (authServer) where

import Protolude

import Control.Monad.Reader (ReaderT)
import JWT (Token, buildSimpleJWT)
import Servant (Handler, ServerT, err400, err401)
import Servant.API ((:<|>)(..))

import API.Auth (AuthAPI)
import Types.Auth (JWTContext, LoginReq(..), SignupReq(..), UserId(..))

authServer :: ServerT AuthAPI (ReaderT JWTContext Handler)
authServer =
    login :<|> signup
    where
        login :: LoginReq -> ReaderT JWTContext Handler Token
        login LoginReq{..} = do
            if username == "admin" && password == "admin" then
                let userId = UserId { unUserId = 1 }
                in buildSimpleJWT userId (show $ unUserId userId)
            else
                throwError err401

        signup :: SignupReq -> ReaderT JWTContext Handler Token
        signup SignupReq{..} = do
            if password == confirmPassword then
                let userId = UserId { unUserId = 2 }
                in buildSimpleJWT userId (show $ unUserId userId)
            else
                throwError err400
