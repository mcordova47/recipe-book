module Router (runRouter) where

import Prelude

import Effect (Effect)
import Elmish (ComponentDef, boot, nat)

import Components.Auth.SignIn as SignIn
import Components.Auth.SignUp as SignUp
import Components.Recipes as Recipes
import Components.Recipe as Recipe
import Routing (Route(..), onRouteChange)
import Types.AppM (AppM, Context, runAppM)
import Types.Recipe (FoodId(..))

runRouter :: Context -> Effect Unit
runRouter ctx =
    onRouteChange (route ctx)

route :: Context -> Route -> Effect Unit
route ctx route' =
    case route' of
        SignIn ->
            mountComponent ctx SignIn.def
        SignUp ->
            mountComponent ctx SignUp.def
        Recipes ->
            mountComponent ctx Recipes.def
        Recipe recipeId ->
            mountComponent ctx (Recipe.def $ FoodId recipeId)
        NotFound ->
            mountComponent ctx SignIn.def

mountComponent :: forall state msg. Context -> ComponentDef AppM state msg -> Effect Unit
mountComponent ctx def =
    boot
        { domElementId: "app"
        , def: nat (runAppM ctx) def
        }
