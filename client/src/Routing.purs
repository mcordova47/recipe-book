module Routing
    ( Route(..)
    , onRouteChange
    , parseUrl
    , printUrl
    ) where

import Prelude

import Data.Array (drop)
import Data.Foldable (intercalate)
import Data.Generic.Rep (class Generic)
import Data.Intertwine (Ctor(..), class Syntax, (<|:|>), (<|||>), (*|>))
import Data.Intertwine.Route (PathInfo(..), end, parseRoute, printRoute, seg)
import Data.Maybe (fromMaybe)
import Data.String (Pattern(..), split)
import Effect (Effect)
import Effect.Uncurried (EffectFn1, runEffectFn1)
import Foreign.Object as Object

data Route
    = SignIn
    | SignUp
    | NotFound
derive instance genericRoute :: Generic Route _

onRouteChange :: (Route -> Effect Unit) -> Effect Unit
onRouteChange handler =
    onHashChange (handler <<< parseUrl)

printUrl :: Route -> String
printUrl =
    fromMaybe "/" <<< map fromPathInfo <<< printRoute routesDef

parseUrl :: String -> Route
parseUrl =
    fromMaybe NotFound <<< parseRoute routesDef <<< toPathInfo

fromPathInfo :: PathInfo -> String
fromPathInfo (PathInfo pathSegments _) =
    "/" <> intercalate "/" pathSegments

toPathInfo :: String -> PathInfo
toPathInfo url =
    PathInfo pathSegments Object.empty
    where
        pathSegments =
            drop 1 $ split (Pattern "/") url

routesDef :: forall syntax. Syntax syntax => syntax PathInfo Route
routesDef =
    (Ctor :: Ctor "SignIn") <|:|> seg "login" *|> end
    <|||>
    (Ctor :: Ctor "SignUp") <|:|> seg "signup" *|> end

onHashChange :: (String -> Effect Unit) -> Effect Unit
onHashChange =
    runEffectFn1 onHashChange_

foreign import onHashChange_ :: EffectFn1 (String -> Effect Unit) Unit
