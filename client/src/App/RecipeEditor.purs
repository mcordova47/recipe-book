module App.RecipeEditor (Props, view) where

import Prelude

import App.Routes (AccessMode(EditMode, ReadMode))
import App.State (Recipe)
import Pux.DOM.Events (DOMEvent)
import Pux.DOM.Events as HE
import Pux.DOM.HTML (HTML)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))

type Props e =
  { recipe :: Recipe
  , accessMode :: AccessMode
  , onToggleEditMode :: DOMEvent -> e
  }

view :: forall e. Props e -> HTML e
view { recipe, accessMode, onToggleEditMode } =
  case accessMode of
    ReadMode ->
      H.div
        ! HA.className "floating-button"
        #! HE.onClick onToggleEditMode
        $ H.i ! HA.className "material-icons" $ text "edit"
    EditMode ->
      H.div ! HA.className "floating-button floating-button--card" $ do
        H.div ! HA.className "recipe-editor__header" $ do
          H.div ! HA.className "recipe-editor__header__title" $ text "Edit Recipe"
          H.div
            ! HA.className "close-button"
            #! HE.onClick onToggleEditMode
            $ H.i ! HA.className "material-icons" $ text "close"
        textInput { value: "Sheet Pan Salmon", label: "RECIPE NAME" }
        textInput { value: "Blah Blah Blah", label: "DIRECTIONS" }

textInput :: forall e. { value :: String, label :: String } -> HTML e
textInput { value, label } =
  formGroup
    { value
    , label
    , input:
        H.input
          ! HA.className "recipe-editor__form-group__input"
          ! HA.value value
    }

textArea :: forall e. { value :: String, label :: String } -> HTML e
textArea { value, label } =
  formGroup
    { value
    , label
    , input:
        H.textarea
          ! HA.className "recipe-editor__form-group__input"
          $ text value
    }

formGroup :: forall e. { label :: String, value :: String, input :: HTML e } -> HTML e
formGroup { label, value, input } =
  H.div ! HA.className "recipe-editor__form-group" $ do
    H.div ! HA.className "recipe-editor__form-group__label" $ text label
    input
      ! HA.className "recipe-editor__form-group__input"
      ! HA.value value
