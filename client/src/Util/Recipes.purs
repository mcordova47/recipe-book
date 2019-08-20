module Util.Recipes (calculateCost, costPerServing, showCostPerServing) where

import Prelude

import Data.Foldable (foldl)
import Data.Formatter.Number (Formatter(..), format)
import Data.Int as Int
import Data.Maybe (Maybe, fromMaybe, maybe)

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

showCostPerServing :: String -> Recipe -> String
showCostPerServing default recipe =
    maybe default formatUsd $ costPerServing recipe

costPerServing :: Recipe -> Maybe Number
costPerServing recipe@(Recipe { servings }) =
    (calculateCost recipe / _) <<< Int.toNumber <$> servings

formatUsd :: Number -> String
formatUsd n =
    "$" <> format usdFormatter n

usdFormatter :: Formatter
usdFormatter =
    Formatter
        { comma: true
        , before: 0
        , after: 2
        , abbreviations: false
        , sign: false
        }
