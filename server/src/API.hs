module API (API) where

import Servant.API ((:<|>), (:>))

import API.Auth (AuthAPI)
import API.Recipe (RecipeAPI)

type API =
    "api" :> (RecipeAPI :<|> AuthAPI)
