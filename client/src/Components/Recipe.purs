module Components.Recipe (Message, def) where

import Prelude

import Data.Either (Either(..))
import Data.Foldable (find)
import Data.Maybe (Maybe(..), fromMaybe, maybe)
import Data.String.Utils (lines)
import Effect.Class (liftEffect)
import Effect.Class.Console (logShow)
import Elmish (ComponentDef, DispatchMsgFn, ReactElement, Transition(..))
import Elmish.React.DOM (fragment, text)

import Components.Layout (layout)
import Network.Recipes (listRecipes)
import Routing as R
import Styleguide.Atoms.Avatar (avatar)
import Styleguide.Atoms.Divider (divider)
import Styleguide.Atoms.Link (linkTo)
import StyleGuide.Atoms.List (list)
import StyleGuide.Atoms.ListItem (listItem)
import StyleGuide.Atoms.ListItemAvatar (listItemAvatar)
import StyleGuide.Atoms.ListItemText (listItemText)
import Styleguide.Atoms.Typography (typography)
import Styleguide.Icons.Alarm (alarmIcon)
import Styleguide.Icons.AttachMoney (attachMoneyIcon)
import Styleguide.Icons.Restaurant (restaurantIcon)
import Styleguide.Icons.Photo (photoOutlinedIcon)
import Styleguide.Layout.Card (cardImage)
import Styleguide.Layout.Container (container)
import Styleguide.Layout.Grid (grid, gridItem)
import Styleguide.Surfaces.Paper (paper)
import Types.AppM (AppM)
import Types.Recipe (FoodId(..), Ingredient(..), IngredientAmount(..), Recipe(..), RecipeComponent(..))
import Util.Measurement (showMeasurement)
import Util.Recipes (DurationType(..), recipeDuration, showCostPerServing)

type State =
    { recipe :: Maybe Recipe
    }

data Message
    = NoOp
    | LoadRecipe (Maybe Recipe)

def :: FoodId -> ComponentDef AppM Message State
def recipeId =
    { init: Transition initialState [initialCmd recipeId]
    , update
    , view
    }

initialCmd :: FoodId -> AppM Message
initialCmd recipeId = do
    recipes <- listRecipes
    case recipes of
        Right rs ->
            pure $ LoadRecipe $ find ((==) recipeId <<< recipeId') rs
        Left err -> do
            liftEffect $ logShow err
            pure NoOp
    where
        recipeId' (Recipe r) =
            r.id

initialState :: State
initialState =
    { recipe: Nothing
    }

update :: State -> Message -> Transition AppM Message State
update state msg = case msg of
    NoOp ->
        pure state
    LoadRecipe recipe ->
        pure state { recipe = recipe }

view :: State -> DispatchMsgFn Message -> ReactElement
view { recipe } dispatch =
    case recipe of
        Just recipe'@(Recipe r) ->
            layout
                [ container
                    { component: "div"
                    , maxWidth: "md"
                    }
                    [ grid
                        { spacing: 2
                        }
                        [ gridItem
                            { xs: 12
                            , md: 6
                            }
                            [ typography
                                { component: "h4"
                                , variant: "h4"
                                , gutterBottom: true
                                , align: "center"
                                , display: "block"
                                }
                                r.name
                            , typography
                                { component: "p"
                                , variant: "subtitle1"
                                , align: "center"
                                }
                                $ fromMaybe " " r.description
                            , grid {}
                                [ gridItem
                                    { xs: 1
                                    , sm: 3
                                    }
                                    ""
                                , gridItem
                                    { xs: 10
                                    , sm: 6
                                    }
                                    [ list {}
                                        [ listItem {}
                                            [ listItemAvatar {}
                                                [ avatar {}
                                                    [ attachMoneyIcon
                                                    ]
                                                ]
                                            , listItemText
                                                { primary: showCostPerServing "N/A" recipe'
                                                , secondary: "Cost per serving"
                                                }
                                            ]
                                        , divider { variant: "inset" }
                                        , listItem {}
                                            [ listItemAvatar {}
                                                [ avatar {}
                                                    [ restaurantIcon
                                                    ]
                                                ]
                                            , listItemText
                                                { primary: maybe "N/A" show r.servings
                                                , secondary: "Servings"
                                                }
                                            ]
                                        , divider { variant: "inset" }
                                        , listItem {}
                                            [ listItemAvatar {}
                                                [ avatar {}
                                                    [ alarmIcon
                                                    ]
                                                ]
                                            , cookTimeText recipe'
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        , gridItem
                            { xs: 12
                            , md: 6
                            }
                            [ paper
                                { square: false
                                , elevation: 0
                                , overflow: "hidden"
                                }
                                [ cardImage
                                    { image: fromMaybe "" r.image
                                    , title: r.name
                                    , placeholder:
                                        container
                                            { component: "div"
                                            }
                                            [ photoOutlinedIcon { fontSize: "large", color: "action" }
                                            ]
                                    , height: 300.0
                                    }
                                ]
                            ]
                    , gridItem
                        { xs: 12
                        }
                        [ divider
                            { variant: "middle"
                            }
                        ]
                    , gridItem
                        { xs: 0
                        , md: 2
                        }
                        ""
                    , gridItem
                        { xs: 12
                        , md: 8
                        }
                        [ typography
                            { component: "h5"
                            , variant: "h5"
                            , gutterBottom: true
                            , align: "left"
                            , display: "block"
                            }
                            "Ingredients"
                            , container
                                { component: "ul"
                                }
                                $ ingredientView <$> r.ingredients
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
                    ]
                ]
        Nothing ->
            layout "Couldn't find recipe"
    where
        ingredientView (IngredientAmount { amount, unitType, ingredient }) =
            typography
                { component: "li"
                , variant: "body1"
                }
                [ text $ show amount <> " " <> showMeasurement unitType <> " "
                , recipeComponentName ingredient
                ]
        recipeComponentName rc = case rc of
            IngredientComp (Ingredient { name }) ->
                text name
            RecipeComp (Recipe { id: FoodId id', name }) ->
                linkTo (R.Recipe id') name
        cookTimeText r =
            listItemText
                { primary: maybe "N/A" (show <<< _.duration) cookTime
                , secondary: maybe "Minutes" (cookTimeLabel <<< _.durationType) cookTime
                }
            where
                cookTime = recipeDuration r
                cookTimeLabel durType = case durType of
                    DMinutes -> "Minutes"
                    DHours -> "Hours"
