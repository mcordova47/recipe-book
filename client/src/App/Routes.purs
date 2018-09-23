module App.Routes where

import Prelude

import App.Filter (Filter(..))
import Control.Alt ((<|>))
import Control.Monad.Eff (Eff)
import DOM (DOM)
import DOM.HTML (window)
import DOM.HTML.Location (setHash)
import DOM.HTML.Types (HISTORY)
import DOM.HTML.Window (location)
import Data.Maybe (Maybe(..), fromMaybe)
import Global (decodeURIComponent, encodeURIComponent)
import Pux.Router (end, lit, param, router)
import Util.Url (Slug, slug, unslugify)

data Route
  = Home
  | Login (Maybe String)
  | Recipes Filter
  | Recipe Slug

match :: String -> Route
match url = fromMaybe Home $ router url $
  Home <$ end
  <|>
  Login Nothing <$ lit "login" <* end
  <|>
  Login Nothing <$ lit "login" <* lit "" <* end
  <|>
  Login <<< Just <<< decodeURIComponent <$> (lit "login" *> param "redirect") <* end
  <|>
  Login <<< Just <<< decodeURIComponent <$> (lit "login" *> lit "" *> param "redirect") <* end
  <|>
  Recipes All <$ lit "recipes" <* end
  <|>
  Recipes All <$ lit "recipes" <* lit "" <* end
  <|>
  Recipe <$> (lit "recipes" *> slug) <* end
  <|>
  Recipe <$> (lit "recipes" *> slug) <* lit "" <* end

toHash :: Route -> String
toHash Home = "/"
toHash (Login (Just redirect)) = "/login/?redirect=" <> encodeURIComponent redirect
toHash (Login _) = "/login/"
toHash (Recipes _) = "/recipes/"
toHash (Recipe slug) = "/recipes/" <> show slug <> "/"

toURL :: Route -> String
toURL = (<>) "#" <<< toHash

toTitle :: Route -> String
toTitle Home = "Recipe Book"
toTitle (Login _) = "Login | Recipe Book"
toTitle (Recipes _) = "Recipes | Recipe Book"
toTitle (Recipe slug) = unslugify slug <> " | Recipe Book"

setRoute :: forall fx. Route -> Eff ( dom :: DOM, history :: HISTORY | fx) Unit
setRoute route = do
  let hash = toHash route
  loc <- location =<< window
  setHash hash loc
