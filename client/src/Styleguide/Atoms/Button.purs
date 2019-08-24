module Styleguide.Atoms.Button (ButtonProps, OptButtonProps, button) where

import Elmish (JsCallback0, createElement)
import Elmish.React.Import (ImportedReactComponent, ImportedReactComponentConstructorWithContent)

type ButtonProps r =
    ( onClick :: JsCallback0
    | r
    )

type OptButtonProps r =
    ( fullWidth :: Boolean
    , color :: String
    , margin :: Array Int
    , size :: String
    , variant :: String
    , type :: String
    | r
    )

button :: ImportedReactComponentConstructorWithContent ButtonProps OptButtonProps
button =
    createElement button_

foreign import button_ :: ImportedReactComponent
