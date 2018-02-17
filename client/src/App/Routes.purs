module App.Routes where

import Prelude

import Control.Alt ((<|>))
import Data.Maybe (fromMaybe)
import Pux.Router (end, int, lit, router)

data Route
  = Home
  | Recipes Filter
  | Recipe Int

data Filter
  = All
  | Search String

match :: String -> Route
match url = fromMaybe Home $ router url $
  Home <$ end
  <|>
  Recipes All <$ lit "recipes" <* end
  <|>
  Recipes All <$ lit "recipes" <* lit "" <* end
  <|>
  Recipe <$> (lit "recipes" *> int) <* end
  <|>
  Recipe <$> (lit "recipes" *> int) <* lit "" <* end

toURL :: Route -> String
toURL Home = "#/"
toURL (Recipes _) = "#/recipes/"
toURL (Recipe id) = "#/recipes/" <> show id <> "/"
