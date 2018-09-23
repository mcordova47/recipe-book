module App.Routes where

import Prelude

import App.Filter (Filter(..))
import Control.Alt ((<|>))
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

toURL :: Route -> String
toURL Home = "#/"
toURL (Login (Just redirect)) = "#/login/?redirect=" <> encodeURIComponent redirect
toURL (Login _) = "#/login/"
toURL (Recipes _) = "#/recipes/"
toURL (Recipe slug) = "#/recipes/" <> show slug <> "/"

toTitle :: Route -> String
toTitle Home = "Recipe Book"
toTitle (Login _) = "Login | Recipe Book"
toTitle (Recipes _) = "Recipes | Recipe Book"
toTitle (Recipe slug) = unslugify slug <> " | Recipe Book"
