module App.RecipeEditor where

import Prelude

import App.Routes (AccessMode(..), Route(..), link)
import App.State (Recipe)
import Pux.DOM.HTML (HTML)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!))
import Util.Url (slugify)

type Props =
  { recipe :: Recipe
  , accessMode :: AccessMode
  }

view :: forall e. Props -> HTML e
view { recipe, accessMode } =
  case accessMode of
    ReadMode ->
      link (Recipe EditMode $ slugify recipe.name)
        ! HA.className "floating-button"
        $ H.i ! HA.className "material-icons" $ text "edit"
    EditMode ->
      H.div ! HA.className "floating-button floating-button--card" $
        link (Recipe ReadMode $ slugify recipe.name)
          ! HA.className "close-button"
          $ H.i ! HA.className "material-icons" $ text "close"
