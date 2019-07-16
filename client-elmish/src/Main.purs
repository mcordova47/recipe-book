module Main where

import Prelude

import Effect (Effect)
import Elmish (boot)

import Auth.SignIn (view)
-- import Auth.SignUp (view)

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
