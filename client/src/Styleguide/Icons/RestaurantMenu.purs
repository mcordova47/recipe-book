module Styleguide.Icons.RestaurantMenu (restaurantMenuIcon) where

import Elmish (createElement')
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructor)

type OptRestaurantMenuProps r =
    ( color :: String
    , fontSize :: String
    | r
    )

restaurantMenuIcon :: ImportedReactComponentConstructor EmptyProps OptRestaurantMenuProps
restaurantMenuIcon =
    createElement' restaurantMenuIcon_

foreign import restaurantMenuIcon_ :: ImportedReactComponent
