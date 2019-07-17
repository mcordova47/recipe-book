module Main where

import Prelude

import Effect (Effect)
import Elmish (boot)

import Routing (runRouter)

main :: Effect Unit
main =
  runRouter
