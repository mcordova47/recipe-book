module Styleguide.Organisms.LoginProgress (Progress(..), loginProgress) where

import Elmish.React (ReactElement)

import Styleguide.Icons.Lock (lockOpenIcon, lockOutlinedIcon)
import Styleguide.Molecules.AvatarProgress (avatarProgress)

data Progress
    = NotStarted
    | Loading
    | Done

loginProgress :: Progress -> ReactElement
loginProgress progress =
    avatarProgress
        { loading
        }
        [ icon
        ]
    where
        loading = case progress of
            Loading -> true
            _ -> false
        icon = case progress of
            Done -> lockOpenIcon
            _ -> lockOutlinedIcon
