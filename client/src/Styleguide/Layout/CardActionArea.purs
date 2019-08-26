module Styleguide.Layout.CardActionArea (cardActionArea) where

import Elmish (createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

cardActionArea :: ImportedReactComponentConstructorWithContent EmptyProps EmptyProps
cardActionArea =
    createElement cardActionArea_

foreign import cardActionArea_ :: ImportedReactComponent
