module Components.Auth.SignIn (Message, def) where

import Prelude

import Effect (Effect)
import Elmish
    ( ComponentDef
    , DispatchMsgFn
    , JsCallback
    , ReactComponent
    , ReactElement
    , Transition
    , createElement'
    , handle
    )

import Routing (Route(SignUp), printUrl)

type State =
    { username :: String
    , password :: String
    }

data Message
    = ChangeUsername String
    | ChangePassword String

def :: forall m. ComponentDef m Message State
def =
    { init: pure initialState
    , update
    , view
    }

initialState :: State
initialState =
    { username: ""
    , password: ""
    }

update :: forall m. State -> Message -> Transition m Message State
update state msg = case msg of
    ChangeUsername username ->
        pure state { username = username }
    ChangePassword password ->
        pure state { password = password }

view :: State -> DispatchMsgFn Message -> ReactElement
view { username, password } dispatch =
    createElement' view_
        { signUpUrl: printUrl SignUp
        , onChangeUsername: handle dispatch ChangeUsername
        , onChangePassword: handle dispatch ChangePassword
        , username
        , password
        }

foreign import view_ ::
    ReactComponent
        { signUpUrl :: String
        , username :: String
        , password :: String
        , onChangeUsername :: JsCallback (String -> Effect Unit)
        , onChangePassword :: JsCallback (String -> Effect Unit)
        }
