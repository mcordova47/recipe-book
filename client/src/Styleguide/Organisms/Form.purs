module Styleguide.Atoms.Form (form) where

import Prelude

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

form :: ImportedReactComponentConstructorWithContent EmptyProps EmptyProps
form =
    createElement form_

foreign import form_ :: ImportedReactComponent
