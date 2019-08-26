module Util.Component (appendCmds, consCmds, updateCmds, (<:>), (<++>)) where

import Prelude

import Data.Array ((:))
import Elmish (Transition(..))

consCmds :: forall m msg state. m msg -> Transition m msg state -> Transition m msg state
consCmds cmd =
    updateCmds (cmd : _)
infix 8 consCmds as <:>

appendCmds :: forall m msg state. Array (m msg) -> Transition m msg state -> Transition m msg state
appendCmds cmds =
    updateCmds (_ <> cmds)
infix 8 appendCmds as <++>

updateCmds :: forall m msg state. (Array (m msg) -> Array (m msg)) -> Transition m msg state -> Transition m msg state
updateCmds update (Transition state cmds) =
    Transition state (update cmds)
