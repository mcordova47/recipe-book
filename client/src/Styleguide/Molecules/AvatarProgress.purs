module Styleguide.Molecules.AvatarProgress (AvatarProgressProps, avatarProgress) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

type AvatarProgressProps r =
    ( loading :: Boolean
    | r
    )

avatarProgress :: ImportedReactComponentConstructorWithContent AvatarProgressProps EmptyProps
avatarProgress =
    createElement avatarProgress_

foreign import avatarProgress_ :: ImportedReactComponent
