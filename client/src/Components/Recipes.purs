module Components.Recipes (Message, def) where

import Prelude

import Data.Either (Either(..))
import Effect.Class (liftEffect)
import Effect.Class.Console (logShow)
import Elmish (handle, ComponentDef, DispatchMsgFn, ReactElement, Transition(..))

import Components.Layout (layout)
import Components.Recipes.Card (recipeCard)
import Network.Recipes (listRecipes)
import Routing as Routing
import Routing (setRoute)
import Styleguide.Layout.Grid (grid, gridItem)
import Types.AppM (AppM)
import Types.Recipe (FoodId(..), Recipe(..))

type State =
    { recipes :: Array Recipe
    }

data Message
    = NoOp
    | LoadRecipes (Array Recipe)
    | ViewRecipe FoodId

def :: ComponentDef AppM Message State
def =
    { init: Transition initialState [initialCmd]
    , update
    , view
    }

initialCmd :: AppM Message
initialCmd = do
    recipes <- listRecipes
    case recipes of
        Right rs ->
            pure $ LoadRecipes rs
        Left err -> do
            liftEffect $ logShow err
            pure NoOp

initialState :: State
initialState =
    { recipes: []
    }

update :: State -> Message -> Transition AppM Message State
update state msg = case msg of
    NoOp ->
        pure state
    LoadRecipes recipes ->
        pure state { recipes = recipes }
    ViewRecipe (FoodId recipeId) ->
        Transition state [liftEffect $ setRoute (Routing.Recipe recipeId) *> pure NoOp]

view :: State -> DispatchMsgFn Message -> ReactElement
view { recipes } dispatch =
    layout
        [ grid
            { spacing: 2
            }
            $ recipes <#> \recipe@(Recipe r) -> gridItem
                { xs: 12
                , sm: 6
                , md: 4
                }
                [ recipeCard
                    { recipe
                    , viewRecipe: handle dispatch (ViewRecipe r.id)
                    }
                ]
        ]
