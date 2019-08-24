module Components.Auth.SignIn (Message, def) where

import Prelude

import Data.Either (Either(..))
import Data.Time.Duration (Milliseconds(..))
import Effect.Aff (delay)
import Effect.Aff.Class (liftAff)
import Effect.Class (liftEffect)
import Elmish
    ( ComponentDef
    , DispatchMsgFn
    , ReactElement
    , Transition(..)
    , handle
    )

import JWT (Token(..))
import Network.Auth (login)
import Routing (Route(Recipes, SignUp), setRoute)
import Styleguide.Atoms.Button (button)
import Styleguide.Atoms.Input (input)
import Styleguide.Atoms.Link (linkTo)
import Styleguide.Atoms.Typography (typography)
import Styleguide.Layout.Container (container)
import Styleguide.Layout.Grid (grid, gridItem)
import Styleguide.Layout.Paper (paper)
import Styleguide.Organisms.Form (form)
import Styleguide.Organisms.LoginProgress (Progress(..), loginProgress)
import Styleguide.Theme (theme)
import Types.AppM (AppM)
import Types.Auth (AuthToken(..), LoginReq(..))
import Util.LocalStorage as LocalStorage
import Util.LocalStorage (Key(KAuthToken))

type State =
    { username :: String
    , password :: String
    , loginState :: Progress
    }

data Message
    = ChangeUsername String
    | ChangePassword String
    | Submit
    | SignIn AuthToken
    | SignInFailed
    | NoOp

def :: ComponentDef AppM Message State
def =
    { init: pure initialState
    , update
    , view
    }

initialState :: State
initialState =
    { username: ""
    , password: ""
    , loginState: NotStarted
    }

update :: State -> Message -> Transition AppM Message State
update state msg = case msg of
    ChangeUsername username ->
        pure state { username = username }
    ChangePassword password ->
        pure state { password = password }
    Submit ->
        Transition state { loginState = Loading } [signIn $ LoginReq { username: state.username, password: state.password }]
    SignIn (AuthToken (Token { getToken })) ->
        Transition
            state { loginState = Done }
            [ do
                liftEffect $ LocalStorage.setItem KAuthToken getToken
                liftAff $ delay $ Milliseconds 400.0
                liftEffect $ setRoute Recipes
                pure NoOp
            ]
    SignInFailed ->
        pure state { loginState = NotStarted }
    NoOp ->
        pure state

signIn :: LoginReq -> AppM Message
signIn req = do
    res <- login req
    case res of
        Right token ->
            pure $ SignIn token
        Left _ ->
            pure SignInFailed

view :: State -> DispatchMsgFn Message -> ReactElement
view { username, password, loginState } dispatch =
    theme {}
        [ container
            { component: "main"
            , maxWidth: "xs"
            }
            [ paper {}
                [ loginProgress loginState
                , typography
                    { component: "h1"
                    , variant: "h5"
                    }
                    "Sign In"
                , form {}
                    [ input
                        { margin: "normal"
                        , required: true
                        , fullWidth: true
                        , label: "Username"
                        , name: "username"
                        , autoFocus: true
                        , value: username
                        , onChange: handle dispatch ChangeUsername
                        }
                    , input
                        { margin: "normal"
                        , required: true
                        , fullWidth: true
                        , name: "password"
                        , label: "Password"
                        , type: "password"
                        , autoComplete: "current-password"
                        , value: password
                        , onChange: handle dispatch ChangePassword
                        }
                    , button
                        { onClick: handle dispatch Submit
                        , fullWidth: true
                        , color: "primary"
                        , margin: [3, 0, 2]
                        , variant: "contained"
                        , type: "submit"
                        }
                        "Sign In"
                    , grid
                        { justify: "flex-end"
                        }
                        [ gridItem {}
                            [ linkTo SignUp "Don't have an account? Sign Up"
                            ]
                        ]
                    ]
                ]
            ]
        ]
