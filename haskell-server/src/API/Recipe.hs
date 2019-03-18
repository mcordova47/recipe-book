module API.Recipe (RecipeAPI) where

import Servant.API (Capture, Get, Header, JSON, (:<|>), (:>))

import Types.Auth (AuthToken)
import Types.Recipe (FoodId, Recipe)

type RecipeAPI =
    "recipes" :> Header "Authorization" AuthToken :>
        (
          Get '[JSON] [Recipe]
          :<|>
          Capture "recipeId" FoodId :> Get '[JSON] Recipe
        )
