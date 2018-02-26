module App.Measurement where

import Prelude

import Data.Either (Either(..))
import Data.Maybe (Maybe(..))

class Eq a <= Convertible a where
  convertBase :: a -> Number -> Number

convert :: forall a. Convertible a => a -> a -> Number -> Number
convert unit1 unit2 x =
  if unit1 == unit2 then
    x
  else
    convertBase unit2 (x / convertBase unit1 1.0)

data VolumeMeasurement
  = Cups
  | Tbsp
  | Tsp

derive instance eqVolumeMeasurement :: Eq VolumeMeasurement

instance showVolumeMeasurement :: Show VolumeMeasurement where
  show Cups = "cups"
  show Tbsp = "tbsp"
  show Tsp = "tsp"

instance convertibleVolumeMeasurement :: Convertible VolumeMeasurement where
  convertBase Cups x = x
  convertBase Tbsp x = 16.0 * x
  convertBase Tsp x = 48.0 * x

data WeightMeasurement
  = Lbs
  | Oz
  | Grams

derive instance eqWeightMeasurement :: Eq WeightMeasurement

instance showWeightMeasurement :: Show WeightMeasurement where
  show Lbs = "lbs"
  show Oz = "oz"
  show Grams = "grams"

instance convertibleWeightMeasurement :: Convertible WeightMeasurement where
  convertBase Lbs x = x
  convertBase Oz x = 16.0 * x
  convertBase Grams x = 453.592 * x

data Measurement
  = Items
  | Volume VolumeMeasurement
  | Weight WeightMeasurement

instance showMeasurement :: Show Measurement where
  show Items = ""
  show (Volume measurement) = show measurement
  show (Weight measurement) = show measurement

parse :: String -> Either String Measurement
parse "ITEM" = Right Items
parse "CUP" = Right $ Volume Cups
parse "TBSP" = Right $ Volume Tbsp
parse "TSP" = Right $ Volume Tsp
parse "LB" = Right $ Weight Lbs
parse "OZ" = Right $ Weight Oz
parse "GRAM" = Right $ Weight Grams
parse str = Left $ "Expected Measurement, but got '" <> str <> "'"

convertMeasurement :: Measurement -> Measurement -> Number -> Maybe Number
convertMeasurement Items Items x = Just x
convertMeasurement (Volume u) (Volume u') x = Just $ convert u u' x
convertMeasurement (Weight u) (Weight u') x = Just $ convert u u' x
convertMeasurement _ _ _ = Nothing
