module App.Events where

import Prelude

import App.Filter (Filter(..))
import App.Routes (toTitle)
import App.Routes as Routes
import App.State (FoodId, RecipeComponent(..), State(..))
import App.Tooltip as Tooltip
import Control.Monad.Aff (attempt)
import Control.Monad.Eff.Class (liftEff)
import Data.Argonaut (decodeJson)
import Data.Bifunctor (bimap)
import Data.Either (Either(..))
import Data.List (List)
import Data.Map (fromFoldable)
import Data.Maybe (Maybe(..))
import Data.Tuple (Tuple(..))
import Network.HTTP.Affjax (AJAX, get)
import Network.RemoteData (RemoteData(..))
import Pux (EffModel, mapEffects, noEffects)
import Pux.DOM.Events (DOMEvent, targetValue)
import Util.DOM (DOCUMENT, setDocumentTitle)

data Event
  = FetchRecipes String
  | ReceiveRecipes (Either String (List RecipeComponent))
  | TooltipEvent Tooltip.Event
  | ChangeSearch DOMEvent
  | ChangeURL Routes.Route
  | ToggleDrawerState

type AppEffects fx = Tooltip.Effects (ajax :: AJAX, document :: DOCUMENT | fx)

foldp :: forall fx. Event -> State -> EffModel State Event (AppEffects fx)
foldp (FetchRecipes api) (State state) =
  { state: State state { recipes = Loading }
  , effects:
      [ do
          res <- attempt $ get (api <> "recipes/")
          let recipes = bimap show _.response res >>= decodeJson
          pure $ Just $ ReceiveRecipes recipes
      ]
  }
foldp (ReceiveRecipes (Right recipeList)) (State state) =
  let recipes = fromFoldable $ map toTuple $ recipeList
  in
    noEffects $ State state { recipes = Success recipes }
foldp (ReceiveRecipes (Left err)) (State state) =
  noEffects $ State state { recipes = Failure err }
foldp (TooltipEvent event) (State state) =
  let { state: tooltipState, effects } = Tooltip.foldp event state.tooltip
  in
    mapEffects TooltipEvent
      { state: State state { tooltip = tooltipState }
      , effects
      }
foldp (ChangeSearch event) (State state) =
  let term = targetValue event
      filter' = if term == "" then All else Search term
  in
    noEffects $ State state { view = Routes.Recipes filter' }
foldp (ChangeURL route) (State state) =
  { state: State state { view = route }
  , effects: [liftEff (setDocumentTitle (toTitle route)) *> pure Nothing]
  }
foldp ToggleDrawerState (State state) =
  noEffects $ State state { drawerOpened = not state.drawerOpened }

toTuple :: RecipeComponent -> Tuple FoodId RecipeComponent
toTuple rc@(RecipeComp id _) = Tuple id rc
toTuple rc@(IngredientComp id _) = Tuple id rc
