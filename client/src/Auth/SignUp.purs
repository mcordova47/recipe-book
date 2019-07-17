module Auth.SignUp (def) where

import Prelude

import Elmish (ComponentDef, DispatchMsgFn, ReactComponent, ReactElement, createElement')

def :: forall m. ComponentDef m Unit Unit
def =
    { init: pure unit
    , update: \_ _ -> pure unit
    , view
    }

view :: Unit -> DispatchMsgFn Unit -> ReactElement
view _ _ =
    createElement' view_ {}

foreign import view_ :: ReactComponent {}
