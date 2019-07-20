module Styleguide.Layout.Grid (OptGridProps, grid, gridItem) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

type OptGridProps r =
    ( justify :: String
    | r
    )

grid :: ImportedReactComponentConstructorWithContent EmptyProps OptGridProps
grid =
    createElement grid_

gridItem :: ImportedReactComponentConstructorWithContent EmptyProps OptGridProps
gridItem =
    createElement gridItem_

foreign import grid_ :: ImportedReactComponent
foreign import gridItem_ :: ImportedReactComponent
