module API (RecipeAPI) where

import Servant.API (Capture, Get, JSON, (:<|>), (:>))

import Types.Recipe (FoodId, Recipe)

type RecipeAPI =
    "api" :> "recipes" :>
      (
        Get '[JSON] [Recipe]
        :<|>
        Capture "recipeId" FoodId :> Get '[JSON] Recipe
      )
