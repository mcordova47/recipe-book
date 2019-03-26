module Types.Measurement
    ( Measurement(..)
    , VolumeMeasurement(..)
    , WeightMeasurement(..)
    ) where

import Protolude

import Data.Aeson (ToJSON)

data VolumeMeasurement
    = Cups
    | Tbsp
    | Tsp
    deriving (Show, Eq, Generic, ToJSON)

data WeightMeasurement
    = Lbs
    | Oz
    | Grams
    deriving (Show, Eq, Generic, ToJSON)

data Measurement
    = Items
    | Volume VolumeMeasurement
    | Weight WeightMeasurement
    deriving (Show, Eq, Generic, ToJSON)
