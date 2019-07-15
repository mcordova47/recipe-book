module Main where

import Prelude

import Effect (Effect)
import Elmish (boot)
import App (view)

main :: Effect Unit
main = do
  boot
    { domElementId: "app"
    , def:
        { init: pure unit
        , update: \_ _ -> pure unit
        , view
        }
    }
