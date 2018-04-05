module Test.Main where

import Prelude

import App.Markdown (Inline(..), Markdown(..), markdownParser)
import Control.Monad.Eff (Eff)
import Data.Either (Either(..))
import Data.Int (round)
import Data.List (List(..), (:))
import Data.String (Pattern(..), Replacement(..), replaceAll)
import Test.QuickCheck (arbitrary, (===))
import Test.QuickCheck.Arbitrary (class Arbitrary)
import Test.Spec (describe, it)
import Test.Spec.QuickCheck (QCRunnerEffects, quickCheck)
import Test.Spec.Reporter.Console (consoleReporter)
import Test.Spec.Runner (run)
import Text.Parsing.Simple (parse)

main :: Eff (QCRunnerEffects ()) Unit
main = run [consoleReporter] do
  describe "Markdown" do
    it "parses tooltip link" $
      quickCheck
        \(LinkText s) n ->
          parse markdownParser ("{" <> s <> "}[" <> show (round n) <> "]") ===
            Right ((Paragraph (Link s (round n) : Nil)) : Nil)

newtype LinkText = LinkText String

instance arbitraryLinkText :: Arbitrary LinkText where
  arbitrary =
    map
      (LinkText
        <<< replaceAll (Pattern "{") (Replacement "")
        <<< replaceAll (Pattern "}") (Replacement "")
      )
      arbitrary
