module API.Auth (AuthAPI) where

import JWT (Token)
import Servant.API (JSON, Post, ReqBody, (:<|>), (:>))

import Types.Auth (LoginReq, SignupReq)

type AuthAPI =
    "auth" :>
        ( "login" :> ReqBody '[JSON] LoginReq :> Post '[JSON] Token
          :<|>
          "signup" :> ReqBody '[JSON] SignupReq :> Post '[JSON] Token
        )
