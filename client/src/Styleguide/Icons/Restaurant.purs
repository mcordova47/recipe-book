module Styleguide.Icons.Restaurant (restaurantIcon) where

import Elmish (ReactElement, createElement')
import Elmish.React.Import (ImportedReactComponent)

restaurantIcon :: ReactElement
restaurantIcon =
    createElement' restaurantIcon_ {}

foreign import restaurantIcon_ :: ImportedReactComponent
