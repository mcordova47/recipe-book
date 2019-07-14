module API.Recipe (RecipeAPI) where

import Servant.API (Get, Header, JSON, (:>))

import Types.Auth (AuthToken)
import Types.Recipe (Recipe)

type RecipeAPI =
    "recipes" :> Header "Authorization" AuthToken :> Get '[JSON] [Recipe]
