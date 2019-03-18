module App.Login (State, Event, init, foldp, view) where

import Prelude

import App.Routes (Route, setRoute)

import Control.Monad.Eff.Class (liftEff)
import DOM (DOM)
import DOM.Classy.Event (preventDefault)
import DOM.HTML (window)
import DOM.HTML.Types (HISTORY)
import DOM.HTML.Window (localStorage)
import DOM.WebStorage.Storage (setItem)
import Data.Argonaut (Json, (.?))
import Data.Argonaut as J

import Data.Either (Either, either)
import Data.Maybe (Maybe(..))
import Network.Auth (login, signup)
import Network.HTTP.Affjax (AJAX)
import Pux (EffModel, noEffects)
import Pux.DOM.Events (DOMEvent, targetValue)
import Pux.DOM.Events as HE
import Pux.DOM.HTML (HTML)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))
import Types.Auth (AuthToken(..), LoginReq(..), SignupReq(..))

data State
  = LoginState LoginState'
  | SignupState SignupState'

type LoginState' =
  { username :: String
  , password :: String
  , isSubmitting :: Boolean
  }

type SignupState' =
  { username :: String
  , password :: String
  , confirmPassword :: String
  , isSubmitting :: Boolean
  }

init :: State
init =
  LoginState { username: "", password: "", isSubmitting: false }

data Event
  = ChangeLIUsername DOMEvent
  | ChangeLIPassword DOMEvent
  | ChangeSUUsername DOMEvent
  | ChangeSUPassword DOMEvent
  | ChangeSUConfirmPassword DOMEvent
  | Login Route String DOMEvent
  | LoggedIn Route AuthToken
  | Signup Route String DOMEvent
  | SignedUp Route AuthToken
  | ToggleView

foldp :: forall fx. Event -> State -> EffModel State Event ( ajax :: AJAX, dom :: DOM, history :: HISTORY | fx)
foldp ev state@(LoginState st@{ username, password }) = case ev of
  ChangeLIUsername event ->
    noEffects $ LoginState st { username = targetValue event }
  ChangeLIPassword event ->
    noEffects $ LoginState st { password = targetValue event }
  ToggleView ->
    noEffects $ SignupState { username: "", password: "", confirmPassword: "", isSubmitting: false }
  Login redirect api event ->
    { state: LoginState st { isSubmitting = true }
    , effects:
        [ do
            let req = LoginReq { username, password }
            token <- login api req
            pure $ either (const Nothing) (Just <<< LoggedIn redirect) token
        ]
    }
  LoggedIn redirect (AuthToken token) ->
    { state
    , effects:
        [ do
            liftEff $ setItem "AUTH_TOKEN" token =<< localStorage =<< window
            liftEff $ setRoute redirect
            pure Nothing
        ]
    }
  _ ->
    noEffects state
foldp ev state@(SignupState st@{ username, password, confirmPassword }) = case ev of
  ChangeSUUsername event ->
    noEffects $ SignupState st { username = targetValue event }
  ChangeSUPassword event ->
    noEffects $ SignupState st { password = targetValue event }
  ChangeSUConfirmPassword event ->
    noEffects $ SignupState st { confirmPassword = targetValue event }
  ToggleView ->
    noEffects $ LoginState { username: "", password: "", isSubmitting: false }
  Signup redirect api event ->
    { state: SignupState st { isSubmitting = true }
    , effects:
        [ do
            liftEff (preventDefault event)
            let req = SignupReq { username, password, confirmPassword }
            token <- signup api req
            pure $ either (const Nothing) (Just <<< SignedUp redirect) token
        ]
    }
  SignedUp redirect (AuthToken token) ->
    { state
    , effects:
        [ do
            liftEff $ setItem "AUTH_TOKEN" token =<< localStorage =<< window
            liftEff $ setRoute redirect
            pure Nothing
        ]
    }
  _ ->
    noEffects state

view :: String -> Route -> State -> HTML Event
view api redirect state =
  H.div ! HA.className "login" $ case state of
    LoginState st ->
      H.form
        ! HA.name "login"
        #! HE.onSubmit (Login redirect api)
        $ do
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
          button
            { label: if st.isSubmitting then "Signing you in..." else "Log In"
            , isSubmitting: st.isSubmitting
            }
          H.hr ! HA.className "login__divider"
          toggleMessage
            { message: "Don't have an account yet?"
            , action: "Sign up"
            }
    SignupState st ->
      H.form
        ! HA.name "signup"
        #! HE.onSubmit (Signup redirect api)
        $ do
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
            { value: st.confirmPassword
            , placeholder: "Confirm Password"
            , onChange: ChangeSUConfirmPassword
            , password: true
            }
          button
            { label: if st.isSubmitting then "Signing you up..." else "Sign Up"
            , isSubmitting: st.isSubmitting
            }
          H.hr ! HA.className "login__divider"
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
  , isSubmitting :: Boolean
  }

button :: ButtonProps -> HTML Event
button { label, isSubmitting } =
  H.button
    ! HA.className
        (if isSubmitting then "login__button login__button--submitting" else "login__button")
    ! HA.type' "submit"
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

decodeToken :: Json -> Either String String
decodeToken json = do
  obj <- J.decodeJson json
  token <- obj .? "token"
  pure token
