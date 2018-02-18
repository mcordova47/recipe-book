module App.State where

import Prelude

import App.Routes as Routes
import App.Tooltip as Tooltip
import Data.Argonaut (class DecodeJson, Json, decodeJson, (.?))
import Data.Either (Either(..))
import Data.List as List
import Data.Map as Map
import Data.Newtype (class Newtype)
import Network.RemoteData (RemoteData(..))

data VolumeMeasurement
  = Cups
  | Tbsp
  | Tsp

data WeightMeasurement
  = Lbs
  | Oz
  | Grams

instance showVolumeMeasurement :: Show VolumeMeasurement where
  show Cups = "cups"
  show Tbsp = "tbsp"
  show Tsp = "tsp"

instance showWeightMeasurement :: Show WeightMeasurement where
  show Lbs = "lbs"
  show Oz = "oz"
  show Grams = "grams"

data Measurement
  = Items
  | Volume VolumeMeasurement
  | Weight WeightMeasurement

parseMeasurement :: String -> Either String Measurement
parseMeasurement "ITEM" = Right $ Items
parseMeasurement "CUP" = Right $ Volume Cups
parseMeasurement "TBSP" = Right $ Volume Tbsp
parseMeasurement "TSP" = Right $ Volume Tsp
parseMeasurement "LB" = Right $ Weight Lbs
parseMeasurement "OZ" = Right $ Weight Oz
parseMeasurement "GRAM" = Right $ Weight Grams
parseMeasurement str = Left $ "Expected Measurement, but got '" <> str <> "'"

instance showMeasurement :: Show Measurement where
  show Items = ""
  show (Volume measurement) = show measurement
  show (Weight measurement) = show measurement

newtype FoodId = FoodId Int

derive instance eqFoodId :: Eq FoodId

derive instance ordFoodId :: Ord FoodId

type Ingredient =
  { name :: String
  , unitCost :: Number
  , unitType :: Measurement
  , amount :: Number
  }

decodeIngredient :: Json -> Either String Ingredient
decodeIngredient json = do
  obj <- decodeJson json
  name <- obj .? "name"
  unitCost <- obj .? "unit_cost"
  unitType <- obj .? "unit_type" >>= parseMeasurement
  amount <- obj .? "amount"
  pure $ { name, unitCost, unitType, amount }

newtype IngredientAmount =
  IngredientAmount
    { ingredient :: FoodId
    , amount :: Number
    -- , unitType :: Measurement
    }

derive instance newtypeIngredientAmount :: Newtype IngredientAmount _

instance decodeJsonIngredientAmount :: DecodeJson IngredientAmount where
  decodeJson json = do
    obj <- decodeJson json
    ingredient <- obj .? "ingredient" # map FoodId
    amount <- obj .? "amount"
    pure $ IngredientAmount { ingredient, amount }

type Recipe =
  { name :: String
  , category :: String
  , ingredients :: List.List IngredientAmount
  , unitType :: Measurement
  , amount :: Number
  , directions :: String
  }

decodeRecipe :: Json -> Either String Recipe
decodeRecipe json = do
  obj <- decodeJson json
  name <- obj .? "name"
  category <- obj .? "category"
  ingredients <- obj .? "ingredients" >>= decodeJson
  unitType <- obj .? "unit_type" >>= parseMeasurement
  amount <- obj .? "amount"
  directions <- obj .? "directions"
  pure $ { name, category, ingredients, unitType, amount, directions }

data RecipeComponent
  = IngredientComp FoodId Ingredient
  | RecipeComp FoodId Recipe

instance decodeRecipeComponent :: DecodeJson RecipeComponent where
  decodeJson json = do
    obj <- decodeJson json
    componentType <- obj .? "component_type"
    id <- obj .? "id" # map FoodId
    case componentType of
      "I" -> do
        ingredient <- decodeIngredient json
        pure $ IngredientComp id ingredient
      "R" -> do
        recipe <- decodeRecipe json
        pure $ RecipeComp id recipe
      str ->
        Left $ "Expected 'I' or 'R', but got'" <> str <> "'"

newtype State = State
  { recipes :: RemoteData String (Map.Map FoodId RecipeComponent)
  , view :: Routes.Route
  , tooltip :: Tooltip.State
  , drawerOpened :: Boolean
  }

derive instance newtypeState :: Newtype State _

init :: State
init = State
  { recipes: NotAsked
  , view: Routes.Home
  , tooltip: Tooltip.init
  , drawerOpened: false
  }
