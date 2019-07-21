module Styleguide.Atoms.AppBar (appBar) where

import Elmish (createElement)
import Elmish.React.Import
    ( EmptyProps
    , ImportedReactComponent
    , ImportedReactComponentConstructorWithContent
    )

type OptAppBarProps r =
    ( color :: String
    , position :: String
    | r
    )

appBar :: ImportedReactComponentConstructorWithContent EmptyProps OptAppBarProps
appBar =
    createElement appBar_

foreign import appBar_ :: ImportedReactComponent
