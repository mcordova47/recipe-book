module Styleguide.Layout.Card (CardProps, card, cardImage) where

import Elmish (JsCallback0, ReactElement, createElement')
import Elmish.React.Import
    ( EmptyProps
    , ImportedReactComponent
    , ImportedReactComponentConstructor
    )

type CardProps r =
    ( content :: Array ReactElement
    | r
    )

type OptCardProps r =
    ( actions :: Array ReactElement
    , onClick :: JsCallback0
    , raised :: Boolean
    , image :: String
    , imageTitle :: String
    , imagePlaceholder :: ReactElement
    , imageHeight :: Number
    | r
    )

card :: ImportedReactComponentConstructor CardProps OptCardProps
card =
    createElement' card_

type OptCardImageProps r =
    ( image :: String
    , title :: String
    , placeholder :: ReactElement
    , height :: Number
    , onMouseEnter :: JsCallback0
    , onMouseLeave :: JsCallback0
    | r
    )

cardImage :: ImportedReactComponentConstructor EmptyProps OptCardImageProps
cardImage =
    createElement' cardImage_

foreign import card_ :: ImportedReactComponent

foreign import cardImage_ :: ImportedReactComponent
