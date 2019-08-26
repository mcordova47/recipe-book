module Styleguide.Icons.AddAPhoto (addAPhotoIcon) where

import Elmish (createElement')
import Elmish.React.Import
    ( EmptyProps
    , ImportedReactComponent
    , ImportedReactComponentConstructor
    )

type OptAddAPhotoProps r =
    ( color :: String
    , fontSize :: String
    | r
    )

addAPhotoIcon :: ImportedReactComponentConstructor EmptyProps OptAddAPhotoProps
addAPhotoIcon =
    createElement' addAPhotoIcon_

foreign import addAPhotoIcon_ :: ImportedReactComponent
