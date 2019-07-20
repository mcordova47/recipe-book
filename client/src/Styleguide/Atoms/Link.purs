module Styleguide.Atoms.Link (LinkProps, link, linkTo) where

import Elmish (ReactElement, createElement)
import Elmish.React.Import (EmptyProps, ImportedReactComponent, ImportedReactComponentConstructorWithContent)

import Routing (Route, printUrl)

type LinkProps r =
    ( href :: String
    | r
    )

linkTo :: Route -> String -> ReactElement
linkTo route =
    link { href: printUrl route }

link :: ImportedReactComponentConstructorWithContent LinkProps EmptyProps
link =
    createElement link_

foreign import link_ :: ImportedReactComponent
