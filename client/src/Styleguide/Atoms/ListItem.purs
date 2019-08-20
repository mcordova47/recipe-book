module StyleGuide.Atoms.ListItem (listItem) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

listItem :: ImportedReactComponentConstructorWithContent EmptyProps EmptyProps
listItem =
    createElement listItem_

foreign import listItem_ :: ImportedReactComponent
