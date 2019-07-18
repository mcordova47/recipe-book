module Auth.SignIn (def) where

import Prelude

import Elmish (ComponentDef, DispatchMsgFn, ReactComponent, ReactElement, createElement')

import Routing (Route(SignUp), printUrl)

def :: forall m. ComponentDef m Unit Unit
def =
    { init: pure unit
    , update: \_ _ -> pure unit
    , view
    }

view :: Unit -> DispatchMsgFn Unit -> ReactElement
view _ _ =
    createElement' view_
        { signUpUrl: printUrl SignUp
        }

foreign import view_ ::
    ReactComponent
        { signUpUrl :: String
        }
