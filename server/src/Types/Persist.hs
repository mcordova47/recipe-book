{-# LANGUAGE NoDeriveAnyClass #-}

module Types.Persist where

import Protolude

import Database.Persist.TH (mkPersist, persistLowerCase, share, sqlSettings)

share [mkPersist sqlSettings] [persistLowerCase|
RecipeComponentEntity sql=recipe_components
    name Text
    unitType Text
    amount Double
    cupsToLbs Double Maybe
IngredientEntity sql=ingredients
    recipeComponent RecipeComponentEntityId
    unitCost Double
    UniqueIngredientRecipeComponent recipeComponent
RecipeEntity sql=recipes
    recipeComponent RecipeComponentEntityId
    category Text
    directions Text
    UniqueRecipeRecipeComponent recipeComponent
RecipeIngredientEntity sql=recipe_ingredients
    recipe RecipeEntityId
    ingredient RecipeComponentEntityId
    amount Double
    unitType Text
    UniqueRecipeIngredient recipe ingredient
|]
