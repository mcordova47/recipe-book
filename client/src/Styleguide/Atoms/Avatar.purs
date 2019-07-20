module Styleguide.Atoms.Avatar (avatar) where

import Prelude

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

avatar :: ImportedReactComponentConstructorWithContent EmptyProps EmptyProps
avatar =
    createElement avatar_

foreign import avatar_ :: ImportedReactComponent
