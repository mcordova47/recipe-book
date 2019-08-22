module Handlers.Recipe
    ( insertIngredients
    , listRecipes
    ) where

import Protolude hiding (from, modify, on)

import Data.Map (Map)
import qualified Data.Map as M
import Database.Esqueleto
    ( InnerJoin(..)
    , from
    , fromSqlKey
    , on
    , select
    , (^.)
    , (==.)
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
    , RecipeId(..)
    , RecipeIngredient(..)
    , recipeComponentId
    , toRecipe
    )

listRecipes :: AppM r m => m [Recipe]
listRecipes =
    insertIngredients <$> listRecipeComponents <*> listRecipeIngredients

insertIngredients :: [(Int, RecipeComponent)] -> [RecipeIngredient] -> [Recipe]
insertIngredients rcs ris =
    insertIngredients' rcMap ris <$> recipes
    where
        recipes =
            mapMaybe toRecipeWithId rcs
        rcMap =
            M.fromList $ toTuple <$> rcs
        toTuple (id, rc) =
            (recipeComponentId rc, (id, rc))
        toRecipeWithId (id, rc) =
            (id,) <$> toRecipe rc

insertIngredients' :: Map FoodId (Int, RecipeComponent) -> [RecipeIngredient] -> (Int, Recipe) -> Recipe
insertIngredients' rcMap recipeIngredients recipe@(recipeId, _) =
    snd $ foldr addIngredientAmount recipe $ filter ((==) (RecipeId recipeId) . riRecipe) recipeIngredients
    where
        addIngredientAmount :: RecipeIngredient -> (Int, Recipe) -> (Int, Recipe)
        addIngredientAmount RecipeIngredient{ riIngredient, riAmount, riUnitType } (rid, r) =
            case M.lookup riIngredient rcMap of
                Just (rid', RecipeComp r') ->
                    let ia = IngredientAmount
                            { ingredient = RecipeComp $ insertIngredients' rcMap recipeIngredients (rid', r')
                            , amount = riAmount
                            , unitType = riUnitType
                            }
                    in (rid, r { ingredients = ia : ingredients r })
                Just (_, ic) ->
                    let ia = IngredientAmount
                            { ingredient = ic
                            , amount = riAmount
                            , unitType = riUnitType
                            }
                    in (rid, r { ingredients = ia : ingredients r })
                Nothing ->
                    (rid, r)

listRecipeComponents :: AppM r m => m [(Int, RecipeComponent)]
listRecipeComponents = do
    rs <- sql $ select $ from $ \(r `InnerJoin` rc) -> do
        on (rc ^. RecipeComponentEntityId ==. r ^. RecipeEntityRecipeComponent)
        pure (rc, r)
    is <- sql $ select $ from $ \(i `InnerJoin` rc) -> do
        on (rc ^. RecipeComponentEntityId ==. i ^. IngredientEntityRecipeComponent)
        pure (rc, i)
    case (rs, is) of
        (Right rs', Right is') ->
            pure $ (toRecipeComp <$> rs') <> (toIngredientComp <$> is')
        _ ->
            throwError err500
    where
        toRecipeComp (Entity rcKey rc, Entity rKey r) =
            ( fromIntegral $ fromSqlKey rKey
            , RecipeComp $ Recipe
                { id = FoodId $ fromIntegral $ fromSqlKey rcKey
                , name = recipeComponentEntityName rc
                , category = recipeEntityCategory r
                , ingredients = []
                , unitType = recipeComponentEntityUnitType rc
                , amount = recipeComponentEntityAmount rc
                , directions = recipeEntityDirections r
                , description = recipeEntityDescription r
                , servings = recipeEntityServings r
                , image = recipeEntityImage r
                , cookMinutes = recipeEntityCookMinutes r
                , cupsToLbs = recipeComponentEntityCupsToLbs rc
                }
            )
        toIngredientComp (Entity rcKey rc, Entity iKey i) =
            ( fromIntegral $ fromSqlKey iKey
            , IngredientComp $ Ingredient
                { id = FoodId $ fromIntegral $ fromSqlKey rcKey
                , name = recipeComponentEntityName rc
                , unitCost = ingredientEntityUnitCost i
                , unitType = recipeComponentEntityUnitType rc
                , amount = recipeComponentEntityAmount rc
                , cupsToLbs = recipeComponentEntityCupsToLbs rc
                }
            )

listRecipeIngredients :: AppM r m => m [RecipeIngredient]
listRecipeIngredients = do
    ris <- sql $ select $ from pure
    either (const $ throwError err500) (pure . fmap toRecipeIngredient) ris
    where
        toRecipeIngredient (Entity _ ri) =
            RecipeIngredient
                { riRecipe = RecipeId $ fromIntegral $ fromSqlKey $ recipeIngredientEntityRecipe ri
                , riIngredient = FoodId $ fromIntegral $ fromSqlKey $ recipeIngredientEntityIngredient ri
                , riAmount = recipeIngredientEntityAmount ri
                , riUnitType = recipeIngredientEntityUnitType ri
                }
