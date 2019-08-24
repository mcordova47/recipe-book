module Styleguide.Atoms.CircularProgress (OptCircularProgressProps, circularProgress) where

import Elmish (createElement')
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructor)

type OptCircularProgressProps r =
    ( size :: Int
    | r
    )

circularProgress :: ImportedReactComponentConstructor EmptyProps OptCircularProgressProps
circularProgress =
    createElement' circularProgress_

foreign import circularProgress_ :: ImportedReactComponent
