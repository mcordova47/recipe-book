module Handlers.Recipe (listRecipes) where

import Protolude hiding (from, on)

import Database.Esqueleto (InnerJoin(..), from, fromSqlKey, on, select, (^.), (==.))
import Database.Persist (Entity(..))
import Servant (err500)
import Sql (sql)
import Types (AppM)
import Types.Persist
    ( RecipeComponentEntity(..)
    , RecipeEntity(..)
    , EntityField(..)
    )
import Types.Recipe (FoodId(..), Recipe(..))

listRecipes :: AppM r m => m [Recipe]
listRecipes = do
    rs <- sql $ select $ from $ \(r `InnerJoin` rc) -> do
        on (r ^. RecipeEntityRecipeComponent ==. rc ^. RecipeComponentEntityId)
        pure (r, rc)
    either (const $ throwError err500) (pure . fmap toRecipe) rs
    where
        toRecipe (Entity key re, Entity _ rce) =
            Recipe
                { id = FoodId $ fromIntegral $ fromSqlKey key
                , name = recipeComponentEntityName rce
                , category = recipeEntityCategory re
                , ingredients = []  -- TODO: Fill in ingredients
                , unitType = recipeComponentEntityUnitType rce
                , amount = recipeComponentEntityAmount rce
                , directions = recipeEntityDirections re
                , cupsToLbs = recipeComponentEntityCupsToLbs rce
                }
