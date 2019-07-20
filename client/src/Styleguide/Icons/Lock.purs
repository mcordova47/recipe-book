module Styleguide.Icons.Lock (lockOutlinedIcon) where

import Prelude

import Elmish (ReactElement, createElement')
import Elmish.React.Import (EmptyProps, ImportedReactComponent)

lockOutlinedIcon :: ReactElement
lockOutlinedIcon =
    createElement' lockOutlinedIcon_ {}

foreign import lockOutlinedIcon_ :: ImportedReactComponent
