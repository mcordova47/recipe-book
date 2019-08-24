module Styleguide.Icons.Lock (lockOpenIcon, lockOutlinedIcon) where

import Prelude

import Elmish (ReactElement, createElement')
import Elmish.React.Import (EmptyProps, ImportedReactComponent)

lockOutlinedIcon :: ReactElement
lockOutlinedIcon =
    createElement' lockOutlinedIcon_ {}

foreign import lockOutlinedIcon_ :: ImportedReactComponent

lockOpenIcon :: ReactElement
lockOpenIcon =
    createElement' lockOpenIcon_ {}

foreign import lockOpenIcon_ :: ImportedReactComponent
