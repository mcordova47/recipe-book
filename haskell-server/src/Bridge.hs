module Bridge where

import Protolude

import System.Directory (doesDirectoryExist, removeDirectoryRecursive)

import Language.PureScript.Bridge
    ( Language(..)
    , SumType
    , buildBridge
    , defaultBridge
    , equal
    , mkSumType
    , writePSTypes
    )

import Types.Measurement
    ( Measurement
    , VolumeMeasurement
    , WeightMeasurement
    )
import Types.Recipe
    ( FoodId
    , Ingredient
    , IngredientAmount
    , Recipe
    , RecipeComponent
    )

generatePureScript :: IO ()
generatePureScript = do
    let dir = "../client/src/Bridge"
    exists <- doesDirectoryExist dir
    when exists $ removeDirectoryRecursive dir
    writePSTypes dir (buildBridge defaultBridge) types

types :: [SumType 'Haskell]
types =
    [ mkEqSumType (Proxy @Measurement)
    , mkEqSumType (Proxy @VolumeMeasurement)
    , mkEqSumType (Proxy @WeightMeasurement)
    , mkEqSumType (Proxy @FoodId)
    , mkEqSumType (Proxy @Ingredient)
    , mkEqSumType (Proxy @IngredientAmount)
    , mkEqSumType (Proxy @Recipe)
    , mkEqSumType (Proxy @RecipeComponent)
    ]
    where
        mkEqSumType p =
            equal p (mkSumType p)
