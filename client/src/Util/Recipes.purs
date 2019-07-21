module Util.Recipes (calculateCost) where

import Prelude

import Data.Foldable (foldl)
import Data.Maybe (fromMaybe)

import Types.Recipe
    ( Ingredient(..)
    , IngredientAmount(..)
    , Recipe(..)
    , RecipeComponent(..)
    )
import Util.Measurement (convertMeasurement)

calculateCost :: Recipe -> Number
calculateCost (Recipe { ingredients }) =
    calculateCost' ingredients

calculateCost' :: Array IngredientAmount -> Number
calculateCost' =
    foldl getIngredientCost 0.0
    where
        getIngredientCost total (IngredientAmount ia) =
            case ia.ingredient of
                IngredientComp (Ingredient { unitCost, unitType, cupsToLbs, amount }) ->
                    total + convert ia.unitType unitType cupsToLbs ia.amount * unitCost / amount
                RecipeComp (Recipe { ingredients, unitType, cupsToLbs, amount }) ->
                    total + convert ia.unitType unitType cupsToLbs ia.amount * calculateCost' ingredients / amount
        convert from to ratio =
            fromMaybe 0.0 <<< convertMeasurement from to ratio
