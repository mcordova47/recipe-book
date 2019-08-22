module Components.Layout (layout) where

import Elmish (ReactElement)
import Elmish.React (class ReactChildren)

import Styleguide.Atoms.AppBar (appBar)
import Styleguide.Atoms.Typography (typography)
import Styleguide.Layout.Container (container)
import Styleguide.Layout.Paper (paper)
import Styleguide.Theme (theme)

layout :: forall children. ReactChildren children => children -> ReactElement
layout children =
    theme {}
        [ container
            { component: "main"
            }
            [ appBar {}
                [ typography
                    { component: "h5"
                    , variant: "h5"
                    }
                    "Recipe Book"
                ]
            , paper {}
                children
            ]
        ]
