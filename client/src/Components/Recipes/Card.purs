module Components.Recipes.Card (recipeCard) where

import Prelude

import Data.Formatter.Number (Formatter(..), format)
import Data.Int (toNumber)
import Data.Maybe (fromMaybe, maybe)
import Elmish (JsCallback0, ReactElement)

import Styleguide.Atoms.Typography (typography)
import Styleguide.Layout.Card (card)
import Types.Recipe (Recipe(..))
import Util.Recipes (calculateCost)

type Props =
    { recipe :: Recipe
    , viewRecipe :: JsCallback0
    }

recipeCard :: Props -> ReactElement
recipeCard { recipe: r@(Recipe { name, description, servings }), viewRecipe } =
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
                , key: "description"
                }
                $ fromMaybe " " description
            , typography
                { component: "h3"
                , variant: "subtitle2"
                , key: "cost"
                }
                $ maybe "N/A" (formatUsd <<< (calculateCost r / _) <<< toNumber) servings
            ]
        , onClick: viewRecipe
        }

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
