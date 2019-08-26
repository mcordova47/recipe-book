module Styleguide.Atoms.IconButton (OptIconButtonProps, iconButton) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

type OptIconButtonProps r =
    ( size :: String
    , component :: String
    | r
    )

iconButton :: ImportedReactComponentConstructorWithContent EmptyProps OptIconButtonProps
iconButton =
    createElement iconButton_

foreign import iconButton_ :: ImportedReactComponent
