module App.Events where

import Prelude

import App.Routes as Routes
import App.State (FoodId, RecipeComponent(..), State(..))
import App.Tooltip as Tooltip
import Control.Monad.Aff (attempt)
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

data Event
  = FetchRecipes
  | ReceiveRecipes (Either String (List RecipeComponent))
  | TooltipEvent Tooltip.Event
  | ChangeSearch DOMEvent
  | ChangeURL Routes.Route

type AppEffects fx = Tooltip.Effects (ajax :: AJAX | fx)

foldp :: forall fx. Event -> State -> EffModel State Event (AppEffects fx)
foldp FetchRecipes state =
  { state
  , effects:
      [ do
          res <- attempt $ get "http://localhost:8000/api/recipes/"
          let recipes = bimap show _.response res >>= decodeJson
          pure $ Just $ ReceiveRecipes recipes
      ]
  }
foldp (ReceiveRecipes resp) (State state) =
  case resp of
    Right recipeList ->
      let recipes = fromFoldable $ map toTuple $ recipeList
      in
        noEffects $ State state { recipes = Success recipes }
    Left _ ->
      noEffects $ State state
foldp (TooltipEvent event) (State state) =
  let { state: tooltipState, effects } = Tooltip.foldp event state.tooltip
  in
    mapEffects TooltipEvent
      { state: State state { tooltip = tooltipState }
      , effects
      }
foldp (ChangeSearch event) (State state) =
  let term = targetValue event
      filter' = if term == "" then Routes.All else Routes.Search term
  in
    noEffects $ State state { view = Routes.Recipes filter' }
foldp (ChangeURL route) (State state) =
  noEffects $ State state { view = route }

toTuple :: RecipeComponent -> Tuple FoodId RecipeComponent
toTuple rc@(RecipeComp id _) = Tuple id rc
toTuple rc@(IngredientComp id _) = Tuple id rc
