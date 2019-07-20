module Styleguide.Layout.Container (ContainerProps, OptContainerProps, container) where

import Elmish (createElement)
import Elmish.React.Import (ImportedReactComponent, ImportedReactComponentConstructorWithContent)

type ContainerProps r =
    ( component :: String
    | r
    )

type OptContainerProps r =
    ( maxWidth :: String
    | r
    )

container :: ImportedReactComponentConstructorWithContent ContainerProps OptContainerProps
container =
    createElement container_

foreign import container_ :: ImportedReactComponent
