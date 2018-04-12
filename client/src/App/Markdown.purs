module App.Markdown where

import Prelude

import Data.Either (Either(..))
import Data.Foldable (foldMap)
import Data.List (List(..), (:))
import Text.Parsing.Combinators (choice)
import Text.Parsing.Simple (Parser, (>>), (<<))
import Text.Parsing.Simple as P

data Markdown
 = Paragraph (List Inline)

derive instance eqMarkdown :: Eq Markdown

instance showMarkdown :: Show Markdown where
  show (Paragraph inlines) = "Paragraph" <> show inlines

data Inline
  = Link String Int
  | Italics String
  | Bold String
  | Word String
  | Space

derive instance eqInline :: Eq Inline

instance showInline :: Show Inline where
  show (Link text id) = "Link " <> show text <> " " <> show id
  show (Italics text) = "Italics " <> show text
  show (Bold text) = "Bold " <> show text
  show (Word text) = "Word " <> show text
  show Space = "Space"

linkParser :: Parser String Inline
linkParser =
  Link <$> P.braces (P.manyChar (P.isn'tAny "{}")) <*> P.brackets P.int

italicsParser :: Parser String Inline
italicsParser =
  Italics <$> (P.char '_' >> P.manyChar (P.isn'tAny "_") << P.char '_')

boldParser :: Parser String Inline
boldParser =
  Bold <$> (P.char '*' >> P.manyChar (P.isn'tAny "*") << P.char '*')

wordParser :: Parser String Inline
wordParser =
  Word <$> P.word

spaceParser :: Parser String Inline
spaceParser =
  map (const Space) (P.someChar (P.anyOf " \t"))

inlineParser :: Parser String Inline
inlineParser =
  choice
    [ linkParser
    , italicsParser
    , boldParser
    , wordParser
    , spaceParser
    ]

paragraphParser :: Parser String Markdown
paragraphParser =
  Paragraph <$> (P.some inlineParser << choice [P.skip $ P.some $ choice [P.newline, P.cr], P.eof])

markdownParser :: Parser String (List Markdown)
markdownParser =
  P.many paragraphParser

stripInline :: Inline -> String
stripInline (Link label _) = label
stripInline (Italics str) = str
stripInline (Bold str) = str
stripInline (Word str) = str
stripInline Space = " "

stripBlock :: Markdown -> String
stripBlock (Paragraph inlines) =
  foldMap stripInline inlines

stripMarkdown :: List Markdown -> String
stripMarkdown md =
  foldMap stripBlock md

tryStripMarkdown :: String -> String
tryStripMarkdown text =
  case P.parse markdownParser text of
    Right md -> stripMarkdown md
    Left _ -> text


parse :: String -> List Markdown
parse text =
  case P.parse markdownParser text of
    Right md -> md
    Left text -> Paragraph (Word text : Nil) : Nil
