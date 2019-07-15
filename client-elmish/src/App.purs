module App (view) where

import Prelude

import Elmish (DispatchMsgFn, ReactComponent, ReactElement, createElement')

view :: forall state msg. state -> DispatchMsgFn msg -> ReactElement
view _ _ =
    createElement' view_ {}

foreign import view_ :: ReactComponent {}
