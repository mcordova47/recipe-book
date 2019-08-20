module StyleGuide.Atoms.List (list) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

list :: ImportedReactComponentConstructorWithContent EmptyProps EmptyProps
list =
    createElement list_

foreign import list_ :: ImportedReactComponent
