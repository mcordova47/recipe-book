module Styleguide.Icons.AttachMoney (attachMoneyIcon) where

import Prelude

import Elmish (ReactElement, createElement')
import Elmish.React.Import (EmptyProps, ImportedReactComponent)

attachMoneyIcon :: ReactElement
attachMoneyIcon =
    createElement' attachMoneyIcon_ {}

foreign import attachMoneyIcon_ :: ImportedReactComponent
