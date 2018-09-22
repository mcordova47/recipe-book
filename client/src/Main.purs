module Main where

import Prelude

import App.Events (AppEffects, Event(..), foldp)
import App.Routes (match, toTitle)
import App.State (State(..), init)
import App.Util.History (sampleHash)
import App.View (view)
import Control.Monad.Eff (Eff)
import DOM (DOM)
import DOM.HTML (window)
import DOM.HTML.Types (HISTORY)
import Pux (CoreEffects, App, start)
import Pux.DOM.Events (DOMEvent)
import Pux.Renderer.React (renderToDOM)
import Signal (constant, (~>))
import Util.DOM (setDocumentTitle)

type WebApp = App (DOMEvent -> Event) Event State

type ClientEffects = CoreEffects (AppEffects (dom :: DOM, history :: HISTORY))

main :: String -> String -> State -> Eff ClientEffects WebApp
main url api (State state) = do
  -- | Create a signal of URL changes.
  urlSignal <- sampleHash =<< window

  -- | Map a signal of URL changes to PageView actions.
  let routeSignal = urlSignal ~> ChangeURL <<< match

  -- | Set the title based on the route
  let route = match url
  setDocumentTitle (toTitle route)

  -- | Start the app.
  app <- start
    { initialState: State state { view = route }
    , view
    , foldp
    , inputs:
        [ constant (FetchRecipes api)
        , routeSignal
        ]
    }

  -- | Render to the DOM
  renderToDOM "#app" app.markup app.input

  -- | Return app to be used for hot reloading logic in support/client.entry.js
  pure app

initialState :: State
initialState = init
