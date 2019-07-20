module Styleguide.Layout.Paper (paper) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

paper :: ImportedReactComponentConstructorWithContent EmptyProps EmptyProps
paper =
    createElement paper_

foreign import paper_ :: ImportedReactComponent
