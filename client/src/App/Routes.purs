module App.Routes where

import Prelude

import App.Filter (Filter(..))
import Control.Alt ((<|>))
import Data.Maybe (fromMaybe)
import Pux.Router (end, lit, router)
import Util.Url (Slug, slug)

data Route
  = Home
  | Recipes Filter
  | Recipe Slug

match :: String -> Route
match url = fromMaybe Home $ router url $
  Home <$ end
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
toURL (Recipes _) = "#/recipes/"
toURL (Recipe slug) = "#/recipes/" <> show slug <> "/"
