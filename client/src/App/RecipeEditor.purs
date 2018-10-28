module App.RecipeEditor where

import Prelude

import App.Events (Event(..))
import App.Routes (AccessMode(EditMode, ReadMode))
import App.State (Recipe)
import Pux.DOM.Events as HE
import Pux.DOM.HTML (HTML)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))

type Props =
  { recipe :: Recipe
  , accessMode :: AccessMode
  }

view :: Props -> HTML Event
view { recipe, accessMode } =
  case accessMode of
    ReadMode ->
      H.div
        ! HA.className "floating-button"
        #! HE.onClick (const ToggleEditMode)
        $ H.i ! HA.className "material-icons" $ text "edit"
    EditMode ->
      H.div ! HA.className "floating-button floating-button--card" $
        H.div
          ! HA.className "close-button"
          #! HE.onClick (const ToggleEditMode)
          $ H.i ! HA.className "material-icons" $ text "close"
