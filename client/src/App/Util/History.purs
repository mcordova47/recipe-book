module App.Util.History (sampleHash) where

import Prelude

import Control.Monad.Eff (Eff)
import DOM (DOM)
import DOM.Event.EventTarget (addEventListener, eventListener)
import DOM.Event.Types (EventType(..))
import DOM.HTML.Location (hash)
import DOM.HTML.Types (HISTORY, Window, windowToEventTarget)
import DOM.HTML.Window (location)
import Data.Maybe (fromMaybe)
import Data.String (Pattern(..), stripPrefix)
import Signal (Signal)
import Signal.Channel (CHANNEL, channel, send, subscribe)

sampleHash :: ∀ eff. Window -> Eff (channel :: CHANNEL, history :: HISTORY, dom :: DOM | eff) (Signal String)
sampleHash win = do
  loc <- location win
  hash' <- hash loc
  chan <- channel $ stripHash hash'

  let listener = eventListener \ev -> do
        hash' <- hash loc
        send chan $ stripHash hash'

  addEventListener (EventType "popstate") listener false (windowToEventTarget win)

  pure (subscribe chan)

stripHash :: String -> String
stripHash str =
   fromMaybe str $ stripPrefix (Pattern "#") str
