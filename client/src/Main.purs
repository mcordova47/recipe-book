module Main where

import Prelude

import App.Events (Event(..), AppEffects, foldp)
import App.State (State, init)
import App.View (view)
import Control.Monad.Eff (Eff)
import DOM (DOM)
import Pux (CoreEffects, App, start)
import Pux.DOM.Events (DOMEvent)
import Pux.Renderer.React (renderToDOM)
import Signal (constant)

type WebApp = App (DOMEvent -> Event) Event State

type ClientEffects = CoreEffects (AppEffects (dom :: DOM))

main :: String -> State -> Eff ClientEffects WebApp
main url state = do
  -- | Start the app.
  app <- start
    { initialState: state
    , view
    , foldp
    , inputs: [constant FetchRecipes]
    }

  -- | Render to the DOM
  renderToDOM "#app" app.markup app.input

  -- | Return app to be used for hot reloading logic in support/client.entry.js
  pure app

initialState :: State
initialState = init
