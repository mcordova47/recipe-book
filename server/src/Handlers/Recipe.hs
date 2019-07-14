module Handlers.Recipe
    ( insertIngredients
    , listRecipes
    ) where

import Protolude hiding (from, modify, on)

import Data.Map (Map)
import qualified Data.Map as M
import Database.Esqueleto
    ( LeftOuterJoin(..)
    , from
    , fromSqlKey
    , just
    , on
    , select
    , (^.)
    , (==.)
    , (?.)
    )
import Database.Persist (Entity(..))
import Servant (err500)
import Sql (sql)
import Types (AppM)
import Types.Persist
    ( IngredientEntity(..)
    , RecipeComponentEntity(..)
    , RecipeEntity(..)
    , RecipeIngredientEntity(..)
    , EntityField(..)
    )
import Types.Recipe
    ( FoodId(..)
    , Ingredient(..)
    , IngredientAmount(..)
    , Recipe(..)
    , RecipeComponent(..)
    , RecipeIngredient(..)
    , recipeComponentId
    , toRecipe
    )

listRecipes :: AppM r m => m [Recipe]
listRecipes =
    insertIngredients <$> listRecipeComponents <*> listRecipeIngredients

insertIngredients :: [RecipeComponent] -> [RecipeIngredient] -> [Recipe]
insertIngredients rcs ris =
    insertIngredients' rcMap ris <$> recipes
    where
        recipes =
            mapMaybe toRecipe rcs
        rcMap =
            M.fromList $ toTuple <$> rcs
        toTuple rc =
            (recipeComponentId rc, rc)

insertIngredients' :: Map FoodId RecipeComponent -> [RecipeIngredient] -> Recipe -> Recipe
insertIngredients' rcMap recipeIngredients recipe@Recipe{ id } =
    foldr addIngredientAmount recipe $ filter ((==) id . riRecipe) recipeIngredients
    where
        addIngredientAmount :: RecipeIngredient -> Recipe -> Recipe
        addIngredientAmount RecipeIngredient{ riIngredient, riAmount, riUnitType } r =
            case M.lookup riIngredient rcMap of
                Just (RecipeComp r') ->
                    let ia = IngredientAmount
                            { ingredient = RecipeComp $ insertIngredients' rcMap recipeIngredients r'
                            , amount = riAmount
                            , unitType = riUnitType
                            }
                    in r { ingredients = ia : ingredients r }
                Just ic ->
                    let ia = IngredientAmount
                            { ingredient = ic
                            , amount = riAmount
                            , unitType = riUnitType
                            }
                    in r { ingredients = ia : ingredients r }
                Nothing ->
                    r

listRecipeComponents :: AppM r m => m [RecipeComponent]
listRecipeComponents = do
    rs <- sql $ select $ from $ \(r `LeftOuterJoin` rc `LeftOuterJoin` i) -> do
        on (just (rc ^. RecipeComponentEntityId) ==. i ?. IngredientEntityRecipeComponent)
        on (just (rc ^. RecipeComponentEntityId) ==. r ?. RecipeEntityRecipeComponent)
        pure (rc, r, i)
    either (const $ throwError err500) (pure . mapMaybe toRecipeComponent) rs
    where
        toRecipeComponent = \case
            (Entity key rc, Just (Entity _ r), _) -> Just $ RecipeComp $
                Recipe
                    { id = FoodId $ fromIntegral $ fromSqlKey key
                    , name = recipeComponentEntityName rc
                    , category = recipeEntityCategory r
                    , ingredients = []
                    , unitType = recipeComponentEntityUnitType rc
                    , amount = recipeComponentEntityAmount rc
                    , directions = recipeEntityDirections r
                    , cupsToLbs = recipeComponentEntityCupsToLbs rc
                    }
            (Entity key rc, _, Just (Entity _ i)) -> Just $ IngredientComp $
                Ingredient
                    { id = FoodId $ fromIntegral $ fromSqlKey key
                    , name = recipeComponentEntityName rc
                    , unitCost = ingredientEntityUnitCost i
                    , unitType = recipeComponentEntityUnitType rc
                    , amount = recipeComponentEntityAmount rc
                    , cupsToLbs = recipeComponentEntityCupsToLbs rc
                    }
            _ -> Nothing

listRecipeIngredients :: AppM r m => m [RecipeIngredient]
listRecipeIngredients = do
    ris <- sql $ select $ from pure
    either (const $ throwError err500) (pure . fmap toRecipeIngredient) ris
    where
        toRecipeIngredient (Entity _ ri) =
            RecipeIngredient
                { riRecipe = FoodId $ fromIntegral $ fromSqlKey $ recipeIngredientEntityRecipe ri
                , riIngredient = FoodId $ fromIntegral $ fromSqlKey $ recipeIngredientEntityIngredient ri
                , riAmount = recipeIngredientEntityAmount ri
                , riUnitType = recipeIngredientEntityUnitType ri
                }
