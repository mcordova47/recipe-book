module Markdown where

import Prelude
import Data.List (List)
import Text.Parsing.Combinators (choice)
import Text.Parsing.Simple
  ( Parser
  , int
  , isn'tAny
  , manyChar
  , braces
  , brackets
  , space
  , word
  , many
  , someChar
  , newline
  )

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
  map (const Space) (someChar (choice [space, newline]))

markdownParser :: Parser String (List Markdown)
markdownParser =
  many (choice [linkParser, wordParser, spaceParser])
