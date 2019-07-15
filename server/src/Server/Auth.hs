module Server.Auth (authServer) where

import Servant (ServerT)
import Servant.API ((:<|>)(..))
import Types (AppM)

import API.Auth (AuthAPI)
import qualified Handlers.Auth as H

authServer :: AppM r m => ServerT AuthAPI m
authServer =
    H.login :<|> H.signup
