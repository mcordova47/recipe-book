module App.Tooltip where

import Prelude hiding (div,top)

import CSS (fixed, left, position, px, top)
import Control.Monad.Aff (liftEff')
import Control.Monad.Eff.Console (CONSOLE)
import DOM (DOM)
import DOM.Classy.HTMLElement (getBoundingClientRect)
import DOM.Classy.Node (fromNode)
import DOM.Event.Event (currentTarget)
import DOM.HTML.Types (HTMLElement)
import Data.Maybe (Maybe(..), fromMaybe)
import Pux (EffModel, noEffects)
import Pux.DOM.Events (DOMEvent, onMouseEnter, onMouseLeave)
import Pux.DOM.HTML (HTML)
import Pux.DOM.HTML.Attributes (style)
import Text.Smolder.HTML (div, span)
import Text.Smolder.HTML.Attributes (className)
import Text.Smolder.Markup (text, (!), (#!))

type Tooltip =
  { top :: Number
  , left :: Number
  , text :: String
  }

type State = Maybe Tooltip

init :: State
init = Nothing

data Event
  = Hide
  | Show Tooltip
  | Hover String DOMEvent

type Effects fx = (console :: CONSOLE, dom :: DOM | fx)

foldp :: forall fx. Event -> State -> EffModel State Event (Effects fx)
foldp Hide state =
  noEffects Nothing
foldp (Show tt) _ =
  noEffects $ Just tt
foldp (Hover text event) state =
  { state
  , effects:
      [ do
          let maybeEl = (fromNode (currentTarget event)) :: Maybe HTMLElement
          case maybeEl of
            Just el -> do
              { left, right, top } <- liftEff' $ getBoundingClientRect el
              pure $ Just $ Show { left: (left + right) / 2.0, top: top - 45.0, text }
            Nothing ->
              pure Nothing
      ]
  }

tooltipView :: Tooltip -> HTML Event
tooltipView state =
  div
    ! className "tooltip"
    ! style do
        top (state.top # px)
        left (state.left # px)
        position fixed
    $ text state.text

tooltip :: State -> HTML Event
tooltip =
  fromMaybe (text "") <<< map tooltipView

label :: String -> String -> HTML Event
label labelText tooltipText =
  span
    ! className "tooltip-label"
    #! onMouseEnter (Hover tooltipText)
    #! onMouseLeave (const Hide)
    $ text labelText
