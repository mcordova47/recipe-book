module Styleguide.Organisms.Form (form) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

form :: ImportedReactComponentConstructorWithContent EmptyProps EmptyProps
form =
    createElement form_

foreign import form_ :: ImportedReactComponent
