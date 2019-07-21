module Util.LocalStorage (Key(..), getItem, setItem) where

import Prelude

import Data.Generic.Rep (class Generic)
import Data.Generic.Rep.Show (genericShow)
import Effect (Effect)
import Effect.Uncurried (EffectFn1, EffectFn2, runEffectFn1, runEffectFn2)

data Key
    = KAuthToken

derive instance genericKey :: Generic Key _

data Proxy a
    = Proxy

class Versioned a where
    version :: Proxy a -> Int

instance versionedKey :: Versioned Key where
    version _ = 1

keyString :: Key -> String
keyString key =
    genericShow key <> "_" <> show (version (Proxy :: Proxy Key))

getItem :: Key -> Effect String
getItem =
    runEffectFn1 getItem_ <<< keyString

setItem :: Key -> String -> Effect Unit
setItem =
    runEffectFn2 setItem_ <<< keyString

foreign import getItem_ :: EffectFn1 String String

foreign import setItem_ :: EffectFn2 String String Unit
