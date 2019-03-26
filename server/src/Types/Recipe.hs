module Types.Recipe
    ( FoodId(..)
    , Ingredient(..)
    , IngredientAmount(..)
    , Recipe(..)
    , RecipeComponent(..)
    ) where

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

data RecipeComponent
    = IngredientComp Ingredient
    | RecipeComp Recipe
    deriving (Eq, Show, Generic, ToJSON)

newtype FoodId =
    FoodId Int
    deriving (Eq, Show, Generic)
    deriving newtype (FromHttpApiData, Num, ToJSON)
