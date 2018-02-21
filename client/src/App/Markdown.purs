module App.Markdown where

import Prelude

import Data.Either (Either(..))
import Data.Foldable (class Foldable, foldl)
import Data.Functor (mapFlipped)
import Data.List (List)
import Data.Monoid (class Monoid, mempty)
import Text.Parsing.Combinators (choice)
import Text.Parsing.Simple (Parser, braces, brackets, cr, int, isn'tAny, many, manyChar, newline, parse, someChar, space, word)

data Markdown
  = Link String Int
  | Word String
  | Space

instance showMarkdown :: Show Markdown where
  show (Link text id) = "Link " <> show text <> " " <> show id
  show (Word text) = "Word " <> show text
  show Space = "Space"

linkParser :: Parser String Markdown
linkParser =
  Link <$> braces (manyChar (isn'tAny "{}")) <*> brackets int

wordParser :: Parser String Markdown
wordParser =
  map Word word

spaceParser :: Parser String Markdown
spaceParser =
  map (const Space) (someChar (choice [space, newline, cr]))

markdownParser :: Parser String (List Markdown)
markdownParser =
  many (choice [linkParser, wordParser, spaceParser])

stripParsed :: List Markdown -> String
stripParsed md =
  concat $ mapFlipped md $ case _ of
    Link label _ -> label
    Word str -> str
    Space -> " "

tryStripMarkdown :: String -> String
tryStripMarkdown text =
  case parse markdownParser text of
    Right md -> stripParsed md
    Left _ -> text

concat :: forall f m. Foldable f => Monoid m => f m -> m
concat = foldl (<>) mempty
