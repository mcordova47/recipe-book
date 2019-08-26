module Styleguide.Icons.PhotoCamera (photoCameraIcon) where

import Elmish (createElement')
import Elmish.React.Import
    ( EmptyProps
    , ImportedReactComponent
    , ImportedReactComponentConstructor
    )

type OptPhotoCameraProps r =
    ( color :: String
    , fontSize :: String
    | r
    )

photoCameraIcon :: ImportedReactComponentConstructor EmptyProps OptPhotoCameraProps
photoCameraIcon =
    createElement' photoCameraIcon_

foreign import photoCameraIcon_ :: ImportedReactComponent
