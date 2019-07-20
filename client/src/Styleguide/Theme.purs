module Styleguide.Theme (theme) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

theme :: ImportedReactComponentConstructorWithContent EmptyProps EmptyProps
theme =
    createElement theme_

foreign import theme_ :: ImportedReactComponent
