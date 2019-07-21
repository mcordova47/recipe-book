module Components.Recipes.Card (recipeCard) where

import Prelude

import Data.Formatter.Number (Formatter(..), format)
import Elmish (JsCallback0, ReactElement)

import Styleguide.Atoms.Button (button)
import Styleguide.Atoms.Typography (typography)
import Styleguide.Layout.Card (card)
import Types.Recipe (Recipe(..))

type Props =
    { recipe :: Recipe
    , viewRecipe :: JsCallback0
    }

recipeCard :: Props -> ReactElement
recipeCard { recipe: Recipe { name, directions }, viewRecipe } =
    card
        { content:
            [ typography
                { component: "h5"
                , variant: "h5"
                , gutterBottom: true
                , key: "title"
                }
                name
            , typography
                { component: "p"
                , variant: "body2"
                , color: "textSecondary"
                , gutterBottom: true
                , key: "directions"
                }
                directions
            , typography
                { component: "h3"
                , variant: "subtitle2"
                , key: "cost"
                }
                $ formatUsd costPerServing
            ]
        , actions:
            [ button
                { size: "small"
                , color: "primary"
                , onClick: viewRecipe
                -- , variant: "text"
                }
                "View Recipe"
            ]
        }
    where
        -- TODO: Calculate cost
        costPerServing = 1.5

formatUsd :: Number -> String
formatUsd n =
    "$" <> format usdFormatter n

usdFormatter :: Formatter
usdFormatter =
    Formatter
        { comma: true
        , before: 0
        , after: 2
        , abbreviations: false
        , sign: false
        }