module Router (runRouter) where

import Prelude

import Effect (Effect)
import Effect.Aff (Aff)
import Elmish (ComponentDef, boot)

import Components.Auth.SignIn as SignIn
import Components.Auth.SignUp as SignUp
import Components.Recipes as Recipes
import Routing (Route(..), onRouteChange)

runRouter :: Effect Unit
runRouter =
    onRouteChange route

route :: Route -> Effect Unit
route route' =
    case route' of
        SignIn ->
            mountComponent SignIn.def
        SignUp ->
            mountComponent SignUp.def
        Recipes ->
            mountComponent Recipes.def
        NotFound ->
            mountComponent SignIn.def

mountComponent :: forall state msg. ComponentDef Aff state msg -> Effect Unit
mountComponent def =
    boot { domElementId: "app", def }
