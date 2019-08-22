module StyleGuide.Atoms.ListItemAvatar (listItemAvatar) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

listItemAvatar :: ImportedReactComponentConstructorWithContent EmptyProps EmptyProps
listItemAvatar =
    createElement listItemAvatar_

foreign import listItemAvatar_ :: ImportedReactComponent
