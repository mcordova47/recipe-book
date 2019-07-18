module Router (runRouter) where

import Prelude

import Effect (Effect)
import Elmish (boot)

import Components.Auth.SignIn as SignIn
import Components.Auth.SignUp as SignUp
import Routing (Route(..), onRouteChange)

runRouter :: Effect Unit
runRouter =
    onRouteChange route

route :: Route -> Effect Unit
route route' =
    boot { domElementId: "app", def }
    where
        def =
            case route' of
                SignIn -> SignIn.def
                SignUp -> SignUp.def
                NotFound -> SignIn.def
