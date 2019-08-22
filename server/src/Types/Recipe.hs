module Types.Recipe where

import Protolude

import Data.Aeson (ToJSON)
import Servant.API (FromHttpApiData)

import Types.Measurement (Measurement)

data Recipe =
    Recipe
        { id :: FoodId
        , name :: Text
        , category :: Text
        , ingredients :: [IngredientAmount]
        , unitType :: Measurement
        , amount :: Double
        , directions :: Text
        , description :: Maybe Text
        , servings :: Maybe Int
        , image :: Maybe Text
        , cookMinutes :: Maybe Int
        , cupsToLbs :: Maybe Double
        }
        deriving (Eq, Show, Generic, ToJSON)

data Ingredient =
    Ingredient
        { id :: FoodId
        , name :: Text
        , unitCost :: Double
        , unitType :: Measurement
        , amount :: Double
        , cupsToLbs :: Maybe Double
        }
        deriving (Eq, Show, Generic, ToJSON)

data IngredientAmount =
    IngredientAmount
        { ingredient :: RecipeComponent
        , amount :: Double
        , unitType :: Measurement
        }
        deriving (Eq, Show, Generic, ToJSON)

data RecipeIngredient =
    RecipeIngredient
        { riRecipe :: RecipeId
        , riIngredient :: FoodId
        , riAmount :: Double
        , riUnitType :: Measurement
        }
        deriving (Eq, Show, Generic, ToJSON)

data RecipeComponent
    = IngredientComp Ingredient
    | RecipeComp Recipe
    deriving (Eq, Show, Generic, ToJSON)

toRecipe :: RecipeComponent -> Maybe Recipe
toRecipe = \case
    RecipeComp r -> Just r
    _ -> Nothing

recipeComponentId :: RecipeComponent -> FoodId
recipeComponentId = \case
    IngredientComp Ingredient{ id } -> id
    RecipeComp Recipe{ id } -> id

newtype FoodId =
    FoodId Int
    deriving (Eq, Ord, Show, Generic)
    deriving newtype (FromHttpApiData, Num, ToJSON)

newtype RecipeId =
    RecipeId Int
    deriving (Eq, Ord, Show, Generic)
    deriving newtype (ToJSON)
