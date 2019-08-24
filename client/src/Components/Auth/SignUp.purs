module Components.Auth.SignUp (Message, def) where

import Prelude

import Elmish
    ( ComponentDef
    , DispatchMsgFn
    , ReactElement
    , Transition(..)
    , handle
    )

import Data.Either (Either(..))
import JWT (Token(..))
import Effect.Class (liftEffect)
import Network.Auth (signup)
import Routing (Route(Recipes, SignIn), setRoute)
import Styleguide.Atoms.Avatar (avatar)
import Styleguide.Atoms.Button (button)
import Styleguide.Atoms.Input (input)
import Styleguide.Atoms.Link (linkTo)
import Styleguide.Atoms.Typography (typography)
import Styleguide.Icons.Lock (lockOutlinedIcon)
import Styleguide.Layout.Container (container)
import Styleguide.Layout.Grid (grid, gridItem)
import Styleguide.Layout.Paper (paper)
import Styleguide.Organisms.Form (form)
import Styleguide.Theme (theme)
import Types.AppM (AppM)
import Types.Auth (AuthToken(..), SignupReq(..))
import Util.LocalStorage as LocalStorage
import Util.LocalStorage (Key(KAuthToken))

type State =
    { username :: String
    , password :: String
    , confirmPassword :: String
    }

data Message
    = ChangeUsername String
    | ChangePassword String
    | ChangeConfirmPassword String
    | Submit
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
    , confirmPassword: ""
    }

update :: State -> Message -> Transition AppM Message State
update state msg = case msg of
    ChangeUsername username ->
        pure state { username = username }
    ChangePassword password ->
        pure state { password = password }
    ChangeConfirmPassword confirmPassword ->
        pure state { confirmPassword = confirmPassword }
    Submit ->
        Transition state [signUp $ SignupReq state]
    NoOp ->
        pure state

signUp :: SignupReq -> AppM Message
signUp req = do
    res <- signup req
    case res of
        Right (AuthToken (Token { getToken })) -> do
            liftEffect $ LocalStorage.setItem KAuthToken getToken
            liftEffect $ setRoute Recipes
        Left _ ->
            pure unit
    pure NoOp

view :: State -> DispatchMsgFn Message -> ReactElement
view { username, password, confirmPassword } dispatch =
    theme {}
        [ container
            { component: "main"
            , maxWidth: "xs"
            }
            [ paper {}
                [ avatar {}
                    [ lockOutlinedIcon
                    ]
                , typography
                    { component: "h1"
                    , variant: "h5"
                    }
                    "Sign Up"
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
                    , input
                        { margin: "normal"
                        , required: true
                        , fullWidth: true
                        , name: "confirm-password"
                        , label: "Confirm Password"
                        , type: "password"
                        , autoComplete: "current-password"
                        , value: confirmPassword
                        , onChange: handle dispatch ChangeConfirmPassword
                        }
                    , button
                        { onClick: handle dispatch Submit
                        , fullWidth: true
                        , color: "primary"
                        , margin: [3, 0, 2]
                        , variant: "contained"
                        , type: "submit"
                        }
                        "Sign Up"
                    , grid
                        { justify: "flex-end"
                        }
                        [ gridItem {}
                            [ linkTo SignIn "Already have an account? Sign in"
                            ]
                        ]
                    ]
                ]
            ]
        ]
