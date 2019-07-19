module Components.Auth.SignUp (Message, def) where

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

import Routing (Route(SignIn), printUrl)

type State =
    { username :: String
    , password :: String
    , confirmPassword :: String
    }

data Message
    = ChangeUsername String
    | ChangePassword String
    | ChangeConfirmPassword String

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
    , confirmPassword: ""
    }

update :: forall m. State -> Message -> Transition m Message State
update state msg = case msg of
    ChangeUsername username ->
        pure state { username = username }
    ChangePassword password ->
        pure state { password = password }
    ChangeConfirmPassword confirmPassword ->
        pure state { confirmPassword = confirmPassword }

view :: State -> DispatchMsgFn Message -> ReactElement
view { username, password, confirmPassword } dispatch =
    createElement' view_
        { signInUrl: printUrl SignIn
        , onChangeUsername: handle dispatch ChangeUsername
        , onChangePassword: handle dispatch ChangePassword
        , onChangeConfirmPassword: handle dispatch ChangeConfirmPassword
        , username
        , password
        , confirmPassword
        }

foreign import view_ ::
    ReactComponent
        { signInUrl :: String
        , username :: String
        , password :: String
        , confirmPassword :: String
        , onChangeUsername :: JsCallback (String -> Effect Unit)
        , onChangePassword :: JsCallback (String -> Effect Unit)
        , onChangeConfirmPassword :: JsCallback (String -> Effect Unit)
        }
