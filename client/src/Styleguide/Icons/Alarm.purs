module Styleguide.Icons.Alarm (alarmIcon) where

import Elmish (ReactElement, createElement')
import Elmish.React.Import (ImportedReactComponent)

alarmIcon :: ReactElement
alarmIcon =
    createElement' alarmIcon_ {}

foreign import alarmIcon_ :: ImportedReactComponent
