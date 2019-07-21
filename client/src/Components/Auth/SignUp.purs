module Components.Auth.SignUp (Message, def) where

import Prelude

import Elmish
    ( ComponentDef
    , DispatchMsgFn
    , ReactElement
    , Transition
    , handle
    )

import Routing (Route(SignIn))
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
    Submit ->
        pure state

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
