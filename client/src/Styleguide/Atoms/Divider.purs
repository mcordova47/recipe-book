module Styleguide.Atoms.Divider (DividerProps, divider) where

import Elmish (createElement')
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructor)

type DividerProps r =
    ( variant :: String
    | r
    )

divider :: ImportedReactComponentConstructor DividerProps EmptyProps
divider =
    createElement' divider_

foreign import divider_ :: ImportedReactComponent
