module Util.Url (Slug, slug, slugify) where

import Prelude

import Data.Either (either)
import Data.Maybe (Maybe(..))
import Data.String (toLower)
import Data.String.Regex as R
import Data.String.Regex.Flags as RF
import Pux.Router (Match, parseSegment)

newtype Slug = Slug String
derive instance eqSlug :: Eq Slug
derive instance ordSlug :: Ord Slug

instance showSlug :: Show Slug where
  show (Slug slug) = slug

slugify :: String -> Slug
slugify =
  toLower
    >>> replaceRegex "\\s+" "-"
    >>> replaceRegex "[^\\w-]+" ""
    >>> replaceRegex "\\-+" "-"
    >>> replaceRegex "^\\-+" ""
    >>> replaceRegex "\\-+$" ""
    >>> Slug
  where
    replaceRegex :: String -> String -> String -> String
    replaceRegex pat rep str =
      R.regex pat RF.global
        # either (const str) \regex -> R.replace regex rep str

slug :: Match Slug
slug = parseSegment (Just <<< Slug)
