module Routing (runRouter) where

import Prelude

import Effect (Effect)
import Effect.Uncurried (EffectFn1, runEffectFn1)
import Elmish (boot)

import Auth.SignIn as SignIn
import Auth.SignUp as SignUp

data Route
    = SignIn
    | SignUp

runRouter :: Effect Unit
runRouter =
    onRouteChange route

route :: Route -> Effect Unit
route route =
    let def = case route of
            SignIn -> SignIn.def
            SignUp -> SignUp.def
    in boot { domElementId: "app", def }

onRouteChange :: (Route -> Effect Unit) -> Effect Unit
onRouteChange handler =
    onHashChange (handler <<< parseRoute)

parseRoute :: String -> Route
parseRoute = case _ of
    "signup" -> SignUp
    _ -> SignIn

onHashChange :: (String -> Effect Unit) -> Effect Unit
onHashChange =
    runEffectFn1 onHashChange_

foreign import onHashChange_ :: EffectFn1 (String -> Effect Unit) Unit
