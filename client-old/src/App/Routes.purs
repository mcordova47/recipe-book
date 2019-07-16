module App.Routes where

import Prelude

import App.Filter (Filter(..))
import Control.Alt ((<|>))
import Control.Monad.Eff (Eff)
import DOM (DOM)
import DOM.HTML (window)
import DOM.HTML.Location (reload, setHash)
import DOM.HTML.Types (HISTORY)
import DOM.HTML.Window (location)
import Data.Maybe (fromMaybe)
import Global (decodeURIComponent, encodeURIComponent)
import Pux.Router (end, lit, param, router)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (Markup, (!))
import Util.Url (Slug, slug, unslugify)

data Route
  = Home
  | Login Route
  | Recipes Filter
  | Recipe AccessMode Slug

data AccessMode
  = ReadMode
  | EditMode

isLogin :: Route -> Boolean
isLogin (Login _) = true
isLogin _ = false

match :: String -> Route
match url = fromMaybe Home $ router url $
  Home <$ end
  <|>
  Login <<< match <<< decodeURIComponent <$> (lit "login" *> param "redirect") <* end
  <|>
  Login <<< match <<< decodeURIComponent <$> (lit "login" *> lit "" *> param "redirect") <* end
  <|>
  Login Home <$ lit "login" <* end
  <|>
  Login Home <$ lit "login" <* lit "" <* end
  <|>
  Recipes All <$ lit "recipes" <* end
  <|>
  Recipes All <$ lit "recipes" <* lit "" <* end
  <|>
  Recipe ReadMode <$> (lit "recipes" *> slug) <* end
  <|>
  Recipe ReadMode <$> (lit "recipes" *> slug) <* lit "" <* end
  <|>
  Recipe EditMode <$> (lit "recipes" *> slug <* lit "edit") <* end
  <|>
  Recipe EditMode <$> (lit "recipes" *> slug <* lit "edit") <* lit "" <* end

toHash :: Route -> String
toHash Home = "/"
toHash (Login redirect) = "/login/?redirect=" <> encodeURIComponent (toHash redirect)
toHash (Recipes _) = "/recipes/"
toHash (Recipe ReadMode slug) = "/recipes/" <> show slug <> "/"
toHash (Recipe EditMode slug) = "/recipes/" <> show slug <> "/edit/"

toURL :: Route -> String
toURL = (<>) "#" <<< toHash

toTitle :: Route -> String
toTitle Home = "Recipe Book"
toTitle (Login _) = "Login | Recipe Book"
toTitle (Recipes _) = "Recipes | Recipe Book"
toTitle (Recipe _ slug) = unslugify slug <> " | Recipe Book"

setRoute :: forall fx. Route -> Eff ( dom :: DOM, history :: HISTORY | fx) Unit
setRoute = setRoute' true

setRoute' :: forall fx. Boolean -> Route -> Eff ( dom :: DOM, history :: HISTORY | fx) Unit
setRoute' refresh route = do
  let hash = toHash route
  window' <- window
  loc <- location window'
  setHash hash loc
  when refresh do
    loc' <- location window'
    reload loc'

link :: forall e. Route -> Markup e -> Markup e
link route =
  H.a ! HA.href (toURL route)
