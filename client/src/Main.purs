module Main where

import Prelude

import Control.Monad.Error.Class (throwError)
import Data.Maybe (maybe)
import Effect (Effect)
import Effect.Console (log)
import Effect.Exception (error)

import Env (lookupEnv)
import Router (runRouter)

main :: Effect Unit
main = do
    apiUrl <- maybe (throwError $ error "API_URL not found") pure =<< lookupEnv "API_URL"
    log ("API_URL: " <> apiUrl)
    runRouter { apiUrl }
