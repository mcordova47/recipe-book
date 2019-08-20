module StyleGuide.Atoms.ListItemText (listItemText) where

import Elmish (createElement')
import Elmish.React.Import (ImportedReactComponent, ImportedReactComponentConstructor)

type ListItemTextProps r =
    ( primary :: String
    | r
    )

type OptListItemTextProps r =
    ( secondary :: String
    | r
    )

listItemText :: ImportedReactComponentConstructor ListItemTextProps OptListItemTextProps
listItemText =
    createElement' listItemText_

foreign import listItemText_ :: ImportedReactComponent
