module Styleguide.Icons.Photo (photoOutlinedIcon) where

import Elmish (ReactElement, createElement')
import Elmish.React.Import
    ( EmptyProps
    , ImportedReactComponent
    , ImportedReactComponentConstructor
    )

type OptPhotoProps r =
    ( color :: String
    , fontSize :: String
    | r
    )

photoOutlinedIcon :: ImportedReactComponentConstructor EmptyProps OptPhotoProps
photoOutlinedIcon =
    createElement' photoOutlinedIcon_

foreign import photoOutlinedIcon_ :: ImportedReactComponent
