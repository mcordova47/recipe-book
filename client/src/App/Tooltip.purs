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
import Data.Either (hush)
import Data.Maybe (Maybe(..))
import Pux (EffModel, noEffects)
import Pux.DOM.Events (DOMEvent, onMouseEnter, onMouseLeave)
import Pux.DOM.HTML (HTML)
import Pux.DOM.HTML.Attributes (style)
import Text.Smolder.HTML (div)
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
foldp (Show tooltip) _ =
  noEffects $ Just tooltip
foldp (Hover text event) state =
  { state
  , effects:
      [ do
          let maybeEl = (fromNode (currentTarget event)) :: Maybe HTMLElement
          case maybeEl of
            Just el -> do
              pos <- liftEff' $ getBoundingClientRect el
              let maybePos = hush pos
              pure $ map (\{ left, right, top } ->
                  Show { left: (left + right) / 2.0, top: top + 25.0, text }
                ) maybePos
            Nothing ->
              pure Nothing
      ]
  }

tooltipView :: State -> HTML Event
tooltipView state =
  case state of
    Just tooltipState ->
      div
        ! className "tooltip"
        ! style do
            top (tooltipState.top # px)
            left (tooltipState.left # px)
            position fixed
        $ text tooltipState.text
    Nothing ->
      text ""

label :: String -> String -> HTML Event
label lbl tooltip =
  div
    ! className "tooltip-label"
    #! onMouseEnter (Hover tooltip)
    #! onMouseLeave (const Hide)
    $ text lbl
