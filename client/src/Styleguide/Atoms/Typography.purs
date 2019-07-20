module Styleguide.Atoms.Typography (TypographyProps, typography) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

type TypographyProps r =
    ( component :: String
    , variant :: String
    | r
    )

typography :: ImportedReactComponentConstructorWithContent TypographyProps EmptyProps
typography =
    createElement typography_

foreign import typography_ :: ImportedReactComponent
