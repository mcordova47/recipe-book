module Util.Url (Slug, slug, slugify, unslugify) where

import Prelude

import Data.Either (either)
import Data.Maybe (Maybe(..), fromMaybe)
import Data.String (Pattern(..), joinWith, split, toLower, toUpper)
import Data.String.CodePoints (splitAt)
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

unslugify :: Slug -> String
unslugify (Slug slug) =
  split (Pattern "-") slug
    # map capitalize
    # joinWith " "
  where
    capitalize str = toUpper before <> after
      where
        { before, after } =
          fromMaybe { before: "", after: "" } $ splitAt 1 str

slug :: Match Slug
slug = parseSegment (Just <<< Slug)
