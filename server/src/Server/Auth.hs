module Server.Auth (authServer) where

import Protolude

import JWT (Token, buildSimpleJWT)
import Servant (ServerT, err400, err401)
import Servant.API ((:<|>)(..))
import Types (AppM)

import API.Auth (AuthAPI)
import Types.Auth (LoginReq(..), SignupReq(..), UserId(..))

authServer :: AppM r m => ServerT AuthAPI m
authServer =
    login :<|> signup
    where
        login :: AppM r m => LoginReq -> m Token
        login LoginReq{..} = do
            if username == "admin" && password == "admin" then
                let userId = UserId { unUserId = 1 }
                in buildSimpleJWT userId (show $ unUserId userId)
            else
                throwError err401

        signup :: AppM r m => SignupReq -> m Token
        signup SignupReq{..} = do
            if password == confirmPassword then
                let userId = UserId { unUserId = 2 }
                in buildSimpleJWT userId (show $ unUserId userId)
            else
                throwError err400
