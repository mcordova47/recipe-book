module App.Routes where

import Prelude

import App.Filter (Filter(..))
import Control.Alt ((<|>))
import Control.Monad.Eff (Eff)
import DOM (DOM)
import DOM.HTML (window)
import DOM.HTML.Location (origin, pathname, reload, setHref)
import DOM.HTML.Types (HISTORY)
import DOM.HTML.Window (location)
import Data.Maybe (Maybe(..), fromMaybe)
import Global (decodeURIComponent, encodeURIComponent)
import Pux.Router (end, lit, param, router)
import Util.Url (Slug, slug, unslugify)

data Route
  = Home
  | Login (Maybe Route)
  | Recipes Filter
  | Recipe Slug

isLogin :: Route -> Boolean
isLogin (Login _) = true
isLogin _ = false

match :: String -> Route
match url = fromMaybe Home $ router url $
  Home <$ end
  <|>
  Login <<< Just <<< match <<< decodeURIComponent <$> (lit "login" *> param "redirect") <* end
  <|>
  Login <<< Just <<< match <<< decodeURIComponent <$> (lit "login" *> lit "" *> param "redirect") <* end
  <|>
  Login Nothing <$ lit "login" <* end
  <|>
  Login Nothing <$ lit "login" <* lit "" <* end
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
toHash (Login (Just redirect)) = "/login/?redirect=" <> encodeURIComponent (toHash redirect)
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
  let hash = toURL route
  window' <- window
  loc <- location window'
  origin' <- origin loc
  pathname' <- pathname loc
  setHref (origin' <> pathname' <> hash) loc
