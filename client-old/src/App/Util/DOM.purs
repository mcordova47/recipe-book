module Util.DOM (DOCUMENT, setDocumentTitle) where

import Control.Monad.Eff (kind Effect, Eff)
import Data.Unit (Unit)

foreign import data DOCUMENT :: Effect

foreign import setDocumentTitle :: forall e. String -> Eff (document :: DOCUMENT | e) Unit
