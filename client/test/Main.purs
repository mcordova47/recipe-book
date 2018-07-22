module Test.Main where

import Prelude

import App.Markdown (Inline(..), Markdown(..), parse)
import Control.Monad.Eff (Eff)
import Data.Either (Either(..))
import Data.List (List(..), (:))
import Data.String (Pattern(..), Replacement(..), replaceAll)
import Test.QuickCheck (arbitrary, (===))
import Test.QuickCheck.Arbitrary (class Arbitrary)
import Test.Spec (describe, it)
import Test.Spec.QuickCheck (QCRunnerEffects, quickCheck)
import Test.Spec.Reporter.Console (consoleReporter)
import Test.Spec.Runner (run)

main :: Eff (QCRunnerEffects ()) Unit
main = run [consoleReporter] do
  describe "Markdown" do
    it "parses tooltip link" $
      quickCheck
        \(LinkText s) (n :: Int) ->
          parse ("{" <> s <> "}[" <> show n <> "]") ===
            Paragraph (Link s n : Nil) : Nil

newtype LinkText = LinkText String

instance arbitraryLinkText :: Arbitrary LinkText where
  arbitrary =
    map
      (LinkText
        <<< replaceAll (Pattern "{") (Replacement "")
        <<< replaceAll (Pattern "}") (Replacement "")
      )
      arbitrary
