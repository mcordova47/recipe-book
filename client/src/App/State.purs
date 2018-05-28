module App.State where

import Prelude

import App.Measurement (Measurement)
import App.Measurement as Measurement
import App.Routes as Routes
import App.Tooltip as Tooltip
import Data.Argonaut (class DecodeJson, Json, decodeJson, (.?))
import Data.Either (Either(..), hush)
import Data.List as List
import Data.Map as Map
import Data.Maybe (Maybe)
import Data.Newtype (class Newtype)
import Network.RemoteData (RemoteData(..))

newtype FoodId = FoodId Int

derive instance eqFoodId :: Eq FoodId

derive instance ordFoodId :: Ord FoodId

type Ingredient =
  { name :: String
  , unitCost :: Number
  , unitType :: Measurement
  , amount :: Number
  , cupsToLbs :: Maybe Number
  }

decodeIngredient :: Json -> Either String Ingredient
decodeIngredient json = do
  obj <- decodeJson json
  name <- obj .? "name"
  unitCost <- obj .? "unit_cost"
  unitType <- obj .? "unit_type" >>= Measurement.parse
  amount <- obj .? "amount"
  let cupsToLbs = hush $ obj .? "cups_to_lbs"
  pure $ { name, unitCost, unitType, amount, cupsToLbs }

newtype IngredientAmount =
  IngredientAmount
    { ingredient :: FoodId
    , amount :: Number
    , unitType :: Measurement
    }

derive instance newtypeIngredientAmount :: Newtype IngredientAmount _

instance decodeJsonIngredientAmount :: DecodeJson IngredientAmount where
  decodeJson json = do
    obj <- decodeJson json
    ingredient <- obj .? "ingredient" # map FoodId
    amount <- obj .? "amount"
    unitType <- obj .? "unit_type" >>= Measurement.parse
    pure $ IngredientAmount { ingredient, amount, unitType }

type Recipe =
  { name :: String
  , category :: String
  , ingredients :: List.List IngredientAmount
  , unitType :: Measurement
  , amount :: Number
  , directions :: String
  , cupsToLbs :: Maybe Number
  }

decodeRecipe :: Json -> Either String Recipe
decodeRecipe json = do
  obj <- decodeJson json
  name <- obj .? "name"
  category <- obj .? "category"
  ingredients <- obj .? "ingredients" >>= decodeJson
  unitType <- obj .? "unit_type" >>= Measurement.parse
  amount <- obj .? "amount"
  directions <- obj .? "directions"
  let cupsToLbs = hush $ obj .? "cups_to_lbs"
  pure { name, category, ingredients, unitType, amount, directions, cupsToLbs }

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

type RecipesResponse = RemoteData String (Map.Map FoodId RecipeComponent)

newtype State = State
  { recipes :: RecipesResponse
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
