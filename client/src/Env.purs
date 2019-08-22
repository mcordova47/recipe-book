module Env (getEnv, lookupEnv) where

import Prelude

import Data.Maybe (Maybe)
import Effect (Effect)
import Foreign.Object (Object, lookup)

lookupEnv :: String -> Effect (Maybe String)
lookupEnv s =
    lookup s <$> getEnv

foreign import getEnv :: Effect (Object String)
