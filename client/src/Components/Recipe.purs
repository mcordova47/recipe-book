module Components.Recipe (Message, def) where

import Prelude

import Data.Either (Either(..))
import Data.Foldable (find)
import Data.Maybe (Maybe(..))
import Data.String.Utils (lines)
import Effect.Class (liftEffect)
import Effect.Class.Console (logShow)
import Elmish (ComponentDef, DispatchMsgFn, ReactElement, Transition(..))
import Elmish.React.DOM (fragment)

import Components.Layout (layout)
import Network.Recipes (listRecipes)
import Styleguide.Atoms.Typography (typography)
import Styleguide.Layout.Container (container)
import Types.AppM (AppM)
import Types.Recipe (FoodId, Recipe(..))

type State =
    { recipes :: Array Recipe
    }

data Message
    = NoOp
    | LoadRecipes (Array Recipe)

def :: FoodId -> ComponentDef AppM Message State
def recipeId =
    { init: Transition initialState [initialCmd]
    , update
    , view: view recipeId
    }

initialCmd :: AppM Message
initialCmd = do
    recipes <- listRecipes "http://localhost:8081/api/"
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

view :: FoodId -> State -> DispatchMsgFn Message -> ReactElement
view recipeId { recipes } dispatch =
    case recipe of
        Just (Recipe r) ->
            layout
                [ container
                    { component: "div"
                    }
                    [ typography
                        { component: "h4"
                        , variant: "h4"
                        , gutterBottom: true
                        , align: "left"
                        , display: "block"
                        }
                        r.name
                    , typography
                        { component: "h5"
                        , variant: "h5"
                        , gutterBottom: true
                        , align: "left"
                        , display: "block"
                        }
                        "Ingredients"
                    , typography
                        { component: "h5"
                        , variant: "h5"
                        , gutterBottom: true
                        , align: "left"
                        , display: "block"
                        }
                        "Directions"
                    , fragment
                        $ typography
                            { component: "p"
                            , variant: "body1"
                            }
                            <$>
                            lines r.directions
                    ]
                ]
        Nothing ->
            layout "Couldn't find recipe"
    where
        recipe =
            find ((==) recipeId <<< recipeId') recipes
        recipeId' (Recipe r) =
            r.id
