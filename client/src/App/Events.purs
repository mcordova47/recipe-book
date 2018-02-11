module App.Events where

import Prelude

import App.State (FoodId, Recipe, RecipeComponent(..), State(..), View(..))
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
import Pux (EffModel, noEffects)

data Event
  = NoOp
  | SelectRecipe Recipe
  | FetchRecipes
  | ReceiveRecipes (Either String (List RecipeComponent))

type AppEffects fx = (ajax :: AJAX | fx)

foldp :: ∀ fx. Event -> State -> EffModel State Event (AppEffects fx)
foldp NoOp state = noEffects state
foldp (SelectRecipe recipe) (State state) =
  noEffects $ State state { view = RecipeView recipe  }
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

toTuple :: RecipeComponent -> Tuple FoodId RecipeComponent
toTuple rc@(RecipeComp id _) = Tuple id rc
toTuple rc@(IngredientComp id _) = Tuple id rc
