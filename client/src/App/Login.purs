module App.Login (State, Event, init, foldp, view) where

import Prelude

import Pux (EffModel, noEffects)
import Pux.DOM.Events (DOMEvent, targetValue)
import Pux.DOM.Events as HE
import Pux.DOM.HTML (HTML)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))

data State
  = LoginState LoginState'
  | SignupState SignupState'

type LoginState' =
  { username :: String
  , password :: String
  }

type SignupState' =
  { username :: String
  , password :: String
  , confirmPassword :: String
  }

init :: State
init =
  LoginState { username: "", password: "" }

data Event
  = ChangeLIUsername DOMEvent
  | ChangeLIPassword DOMEvent
  | ChangeSUUsername DOMEvent
  | ChangeSUPassword DOMEvent
  | ChangeSUConfirmPassword DOMEvent
  | Login
  | Signup
  | ToggleView

foldp :: forall fx. Event -> State -> EffModel State Event (fx)
foldp ev s@(LoginState st) = case ev of
  ChangeLIUsername event ->
    noEffects $ LoginState st { username = targetValue event }
  ChangeLIPassword event ->
    noEffects $ LoginState st { password = targetValue event }
  ToggleView ->
    noEffects $ SignupState { username: "", password: "", confirmPassword: "" }
  _ ->
    noEffects s
foldp ev s@(SignupState st) = case ev of
  ChangeSUUsername event ->
    noEffects $ SignupState st { username = targetValue event }
  ChangeSUPassword event ->
    noEffects $ SignupState st { password = targetValue event }
  ChangeSUConfirmPassword event ->
    noEffects $ SignupState st { confirmPassword = targetValue event }
  ToggleView ->
    noEffects $ LoginState { username: "", password: "" }
  _ ->
    noEffects s

view :: State -> HTML Event
view state =
  H.div ! HA.className "login" $ case state of
    LoginState st -> do
      input
        { value: st.username
        , placeholder: "Username"
        , onChange: ChangeLIUsername
        , password: false
        }
      input
        { value: st.password
        , placeholder: "Password"
        , onChange: ChangeLIPassword
        , password: true
        }
      button { label: "Log In", onClick: Login }
      toggleMessage
        { message: "Don't have an account yet?"
        , action: "Sign up"
        }
    SignupState st -> do
      input
        { value: st.username
        , placeholder: "Username"
        , onChange: ChangeSUUsername
        , password: false
        }
      input
        { value: st.password
        , placeholder: "Password"
        , onChange: ChangeSUPassword
        , password: true
        }
      input
        { value: st.password
        , placeholder: "Confirm Password"
        , onChange: ChangeSUConfirmPassword
        , password: true
        }
      button { label: "Sign Up", onClick: Signup }
      toggleMessage
        { message: "Already have an account?"
        , action: "Log In"
        }

type InputProps =
  { value :: String
  , onChange :: DOMEvent -> Event
  , password :: Boolean
  , placeholder :: String
  }

input :: InputProps -> HTML Event
input { value, onChange, password, placeholder } =
  H.input
    ! HA.value value
    ! HA.placeholder placeholder
    ! HA.type' (if password then "password" else "text")
    #! HE.onChange onChange

type ButtonProps =
  { label :: String
  , onClick :: Event
  }

button :: ButtonProps -> HTML Event
button { label, onClick } =
  H.button
    ! HA.className "login__button"
    #! HE.onClick (const onClick)
    $ text label

type ToggleProps =
  { message :: String
  , action :: String
  }

toggleMessage :: ToggleProps -> HTML Event
toggleMessage { message, action } =
  H.div ! HA.className "login__toggle" $ do
    H.span ! HA.className "login__toggle__text" $ text message
    H.a
      ! HA.className "login__toggle__link"
      #! HE.onClick (const ToggleView)
      $ text action
