module Styleguide.Atoms.Typography (OptTypographyProps, TypographyProps, typography) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

type TypographyProps r =
    ( component :: String
    , variant :: String
    | r
    )

type OptTypographyProps r =
    ( color :: String
    , gutterBottom :: Boolean
    | r
    )

typography :: ImportedReactComponentConstructorWithContent TypographyProps OptTypographyProps
typography =
    createElement typography_

foreign import typography_ :: ImportedReactComponent
