module Routing
    ( Route(..)
    , onRouteChange
    , parseUrl
    , printUrl
    , setRoute
    ) where

import Prelude

import Data.Array (drop)
import Data.Foldable (intercalate)
import Data.Generic.Rep (class Generic)
import Data.Intertwine (Ctor(..), class Syntax, (<|:|>), (<|||>), (*|>), (<|*))
import Data.Intertwine.Route (PathInfo(..), end, parseRoute, printRoute, seg, segValue)
import Data.Maybe (fromMaybe)
import Data.String (Pattern(..), split)
import Effect (Effect)
import Effect.Uncurried (EffectFn1, runEffectFn1)
import Foreign.Object as Object

data Route
    = SignIn
    | SignUp
    | Recipes
    | Recipe Int
    | NotFound
derive instance genericRoute :: Generic Route _

routesDef :: forall syntax. Syntax syntax => syntax PathInfo Route
routesDef =
    (Ctor :: Ctor "SignIn") <|:|> seg "login" *|> end
    <|||>
    (Ctor :: Ctor "SignUp") <|:|> seg "signup" *|> end
    <|||>
    (Ctor :: Ctor "Recipes") <|:|> seg "recipes" *|> end
    <|||>
    (Ctor :: Ctor "Recipe") <|:|> seg "recipes" *|> segValue <|* end

onRouteChange :: (Route -> Effect Unit) -> Effect Unit
onRouteChange handler =
    onHashChange (handler <<< parseUrl)

printUrl :: Route -> String
printUrl =
    fromPathInfo <<< fromMaybe (PathInfo [] Object.empty) <<< printRoute routesDef

parseUrl :: String -> Route
parseUrl =
    fromMaybe NotFound <<< parseRoute routesDef <<< toPathInfo

fromPathInfo :: PathInfo -> String
fromPathInfo (PathInfo pathSegments _) =
    "#/" <> intercalate "/" pathSegments

toPathInfo :: String -> PathInfo
toPathInfo url =
    PathInfo pathSegments Object.empty
    where
        pathSegments =
            drop 1 $ split (Pattern "/") url

onHashChange :: (String -> Effect Unit) -> Effect Unit
onHashChange =
    runEffectFn1 onHashChange_

foreign import onHashChange_ :: EffectFn1 (String -> Effect Unit) Unit

setRoute :: Route -> Effect Unit
setRoute =
    setHash <<< printUrl

setHash :: String -> Effect Unit
setHash =
    runEffectFn1 setHash_

foreign import setHash_ :: EffectFn1 String Unit
