module Bridge where

import Protolude

import System.Directory (doesDirectoryExist, removeDirectoryRecursive)

import JWT (Token)
import Language.PureScript.Bridge
    ( Language(..)
    , SumType
    , buildBridge
    , defaultBridge
    , equal
    , mkSumType
    , writePSTypes
    )

import Types.Auth
    ( AuthToken
    , LoginReq
    , SignupReq
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
    , mkSumType (Proxy @AuthToken)
    , mkSumType (Proxy @LoginReq)
    , mkSumType (Proxy @SignupReq)
    , mkEqSumType (Proxy @Token)
    ]
    where
        mkEqSumType p =
            equal p (mkSumType p)
