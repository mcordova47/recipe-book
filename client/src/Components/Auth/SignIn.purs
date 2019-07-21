module Components.Auth.SignIn (Message, def) where

import Prelude

import Data.Either (Either(..))
import Effect.Aff (Aff)
import Effect.Class (liftEffect)
import Elmish
    ( ComponentDef
    , DispatchMsgFn
    , ReactElement
    , Transition(..)
    , handle
    )

import Network.Auth (login)
import Routing (Route(Recipes, SignUp), setRoute)
import Styleguide.Atoms.Avatar (avatar)
import Styleguide.Atoms.Button (button)
import Styleguide.Atoms.Form (form)
import Styleguide.Atoms.Input (input)
import Styleguide.Atoms.Link (linkTo)
import Styleguide.Atoms.Typography (typography)
import Styleguide.Icons.Lock (lockOutlinedIcon)
import Styleguide.Layout.Container (container)
import Styleguide.Layout.Grid (grid, gridItem)
import Styleguide.Layout.Paper (paper)
import Styleguide.Theme (theme)
import Types.Auth (LoginReq(..))

type State =
    { username :: String
    , password :: String
    }

data Message
    = ChangeUsername String
    | ChangePassword String
    | Submit
    | NoOp

def :: ComponentDef Aff Message State
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

update :: State -> Message -> Transition Aff Message State
update state msg = case msg of
    ChangeUsername username ->
        pure state { username = username }
    ChangePassword password ->
        pure state { password = password }
    Submit ->
        Transition state [signIn $ LoginReq state]
    NoOp ->
        pure state

signIn :: LoginReq -> Aff Message
signIn req = do
    res <- login "http://localhost:8081/api/" req
    case res of
        Right _ ->
            liftEffect $ setRoute Recipes
        Left _ ->
            pure unit
    pure NoOp

view :: State -> DispatchMsgFn Message -> ReactElement
view { username, password } dispatch =
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
