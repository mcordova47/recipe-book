module Styleguide.Surfaces.Paper (OptPaperProps, paper) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

type OptPaperProps r =
    ( elevation :: Int
    , component :: String
    , square :: Boolean
    , overflow :: String
    | r
    )

paper :: ImportedReactComponentConstructorWithContent EmptyProps OptPaperProps
paper =
    createElement paper_

foreign import paper_ :: ImportedReactComponent
