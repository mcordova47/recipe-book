module Styleguide.Layout.Card (CardProps, card) where

import Elmish (ReactElement, createElement')
import Elmish.React.Import
    ( ImportedReactComponent
    , ImportedReactComponentConstructor
    )

type CardProps r =
    ( content :: Array ReactElement
    | r
    )

type OptCardProps r =
    ( actions :: Array ReactElement
    | r
    )

card :: ImportedReactComponentConstructor CardProps OptCardProps
card =
    createElement' card_

foreign import card_ :: ImportedReactComponent
