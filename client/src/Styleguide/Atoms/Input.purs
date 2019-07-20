module Styleguide.Atoms.Input (InputProps, OptInputProps, input) where

import Prelude

import Effect (Effect)
import Elmish (JsCallback, createElement')
import Elmish.React.Import (ImportedReactComponent, ImportedReactComponentConstructor)

type InputProps r =
    ( onChange :: JsCallback (String -> Effect Unit)
    , value :: String
    | r
    )

type OptInputProps r =
    ( type :: String
    , margin :: String
    , required :: Boolean
    , fullWidth :: Boolean
    , label :: String
    , name :: String
    , autoComplete :: String
    , autoFocus :: Boolean
    | r
    )

input :: ImportedReactComponentConstructor InputProps OptInputProps
input =
    createElement' input_

foreign import input_ :: ImportedReactComponent
