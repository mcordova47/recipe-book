module Util.Measurement where

import Prelude

import Data.Maybe (Maybe(..))
import Data.Newtype (class Newtype, unwrap)
import Types.Measurement (Measurement(..), VolumeMeasurement(..), WeightMeasurement(..))

showMeasurement :: Measurement -> String
showMeasurement = case _ of
  Items -> ""
  Volume v -> showVolume v
  Weight w -> showWeight w

showVolume :: VolumeMeasurement -> String
showVolume = case _ of
  Cups -> "cups"
  Tbsp -> "tbsp"
  Tsp -> "tsp"

showWeight :: WeightMeasurement -> String
showWeight = case _ of
  Lbs -> "lbs"
  Oz -> "oz"
  Grams -> "grams"

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

convertMeasurement :: Measurement -> Measurement -> Maybe Number -> Number -> Maybe Number
convertMeasurement unitA unitB baseRatio x =
  case unitA, unitB, baseRatio of
    Items, Items, _ ->
      Just x

    Volume u, Volume u', _ ->
      Just $ convert (CV u) (CV u') x

    Weight u, Weight u', _ ->
      Just $ convert (CW u) (CW u') x

    Volume u, Weight u', Just r ->
      Just $ crossConvert (CV u) (CW u') r x

    Weight u, Volume u', Just r ->
      Just $ crossConvert (CW u) (CV u') (1.0 / r) x

    _, _, _ ->
      Nothing

newtype ConvertibleVolume = CV VolumeMeasurement
derive instance newtypeConvertibleVolume :: Newtype ConvertibleVolume _

instance convertibleVolume :: Convertible ConvertibleVolume where
  convertFromBase unitType x =
    case unwrap unitType of
      Cups -> x
      Tbsp -> 16.0 * x
      Tsp -> 48.0 * x

newtype ConvertibleWeight = CW WeightMeasurement
derive instance newtypeConvertibleWeight :: Newtype ConvertibleWeight _

instance convertibleWeight :: Convertible ConvertibleWeight where
  convertFromBase unitType x =
    case unwrap unitType of
      Lbs -> x
      Oz -> 16.0 * x
      Grams -> 453.592 * x
