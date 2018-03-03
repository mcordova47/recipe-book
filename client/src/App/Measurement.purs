module App.Measurement where

import Prelude

import Data.Either (Either(..))
import Data.Maybe (Maybe(..))

class Convertible a where
  convertFromBase :: a -> Number -> Number

convertToBase :: forall a. Convertible a => a -> Number -> Number
convertToBase unit x =
  x / convertFromBase unit 1.0

convert :: forall a. Convertible a => a -> a -> Number -> Number
convert fromUnit toUnit =
  convertToBase fromUnit >>> convertFromBase toUnit

crossConvert :: forall a b. Convertible a => Convertible b => a -> b -> Number -> Number -> Number
crossConvert fromUnit toUnit baseRatio =
  convertToBase fromUnit >>> (*) baseRatio >>> convertFromBase toUnit

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
  convertFromBase Cups x = x
  convertFromBase Tbsp x = 16.0 * x
  convertFromBase Tsp x = 48.0 * x

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
  convertFromBase Lbs x = x
  convertFromBase Oz x = 16.0 * x
  convertFromBase Grams x = 453.592 * x

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

convertMeasurement :: Measurement -> Measurement -> Maybe Number -> Number -> Maybe Number
convertMeasurement Items Items _ x = Just x
convertMeasurement (Volume u) (Volume u') _ x = Just $ convert u u' x
convertMeasurement (Weight u) (Weight u') _ x = Just $ convert u u' x
convertMeasurement (Volume u) (Weight u') (Just r) x = Just $ crossConvert u u' r x
convertMeasurement (Weight u) (Volume u') (Just r) x = Just $ crossConvert u u' (1.0 / r) x
convertMeasurement _ _ _ _ = Nothing
