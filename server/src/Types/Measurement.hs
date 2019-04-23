module Types.Measurement
    ( Measurement(..)
    , VolumeMeasurement(..)
    , WeightMeasurement(..)
    ) where

import Protolude

import Data.Aeson (ToJSON)
import qualified Data.Text as T
import Database.Persist (PersistField(..), PersistValue(PersistText))
import Database.Persist.Sql (PersistFieldSql(..), SqlType(SqlString))

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

instance PersistField Measurement where
    toPersistValue = \case
        Items -> PersistText "items"
        Volume Cups -> PersistText "cups"
        Volume Tbsp -> PersistText "tbsp"
        Volume Tsp -> PersistText "tsp"
        Weight Lbs -> PersistText "lbs"
        Weight Oz -> PersistText "oz"
        Weight Grams -> PersistText "grams"
    fromPersistValue = \case
        PersistText "items" -> Right Items
        PersistText "cups" -> Right (Volume Cups)
        PersistText "tbsp" -> Right (Volume Tbsp)
        PersistText "tsp" -> Right (Volume Tsp)
        PersistText "lbs" -> Right (Weight Lbs)
        PersistText "oz" -> Right (Weight Oz)
        PersistText "grams" -> Right (Weight Grams)
        val -> Left ("Unexpected value for measurement: " <> T.pack (show val))

instance PersistFieldSql Measurement where
    sqlType _ = SqlString
