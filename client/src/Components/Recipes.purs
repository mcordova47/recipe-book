module Components.Recipes (Message, def) where

import Prelude

import Data.Array (replicate)
import Data.Maybe (Maybe(..))
import Elmish (handle, ComponentDef, DispatchMsgFn, ReactElement)

import Components.Layout (layout)
import Components.Recipes.Card (recipeCard)
import Styleguide.Layout.Grid (grid, gridItem)
import Types.AppM (AppM)
import Types.Measurement (Measurement(..), VolumeMeasurement(..))
import Types.Recipe
    ( FoodId(..)
    , Ingredient(..)
    , IngredientAmount(..)
    , Recipe(..)
    , RecipeComponent(..)
    )

type State =
    { recipes :: Array Recipe
    }

data Message
    = NoOp

def :: ComponentDef AppM Message State
def =
    { init: pure initialState
    , update: \_ _ -> pure initialState
    , view
    }

initialState :: State
initialState =
    { recipes: replicate 5 chili
    }
    where
        chili =
            Recipe
                { id: FoodId 1
                , name: "Lentil Chili"
                , category: "Main"
                , ingredients:
                    [ IngredientAmount
                        { ingredient: IngredientComp $ Ingredient
                            { id: FoodId 2
                            , name: "Crushed Tomatoes"
                            , unitCost: 1.5
                            , unitType: Volume Cups
                            , amount: 2.0
                            , cupsToLbs: Nothing
                            }
                        , amount: 1.0
                        , unitType: Volume Cups
                        }
                    ]
                , unitType: Volume Cups
                , amount: 5.0
                , directions: "Yummy vegan instant pot chili featuring red lentils, fire-roasted tomatoes, walnuts, black beans, pumpkin, chipotles, and all the good toppings. I LOVE THIS ONE."
                , cupsToLbs: Nothing
                }

view :: State -> DispatchMsgFn Message -> ReactElement
view { recipes } dispatch =
    layout
        [ grid
            { spacing: 2
            }
            $ recipes <#> \recipe -> gridItem
                { xs: 12
                , sm: 6
                , md: 4
                }
                [ recipeCard
                    { recipe
                    , viewRecipe: handle dispatch NoOp
                    }
                ]
        ]
