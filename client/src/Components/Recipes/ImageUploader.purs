module Components.Recipes.ImageUploader (Message(..), Props, State, init, update, view) where

import Prelude

import Data.Maybe (Maybe, fromMaybe)
import Effect (Effect)
import Elmish (DispatchMsgFn, JsCallback, ReactElement, Transition(..), handle)

import Styleguide.Atoms.FileUpload (fileUpload)
import Styleguide.Atoms.IconButton (iconButton)
import Styleguide.Layout.Card (cardImage)
import Styleguide.Layout.Container (container)
import Styleguide.Icons.AddAPhoto (addAPhotoIcon)
import Styleguide.Icons.RestaurantMenu (restaurantMenuIcon)
import Types.AppM (AppM)

type Props =
    { image :: Maybe String
    , title :: String
    , readOnly :: Boolean
    , onChange :: JsCallback (String -> Effect Unit)
    }

type State =
    { isHovered :: Boolean
    }

data Message
    = MouseEnter
    | MouseLeave

init :: Transition AppM Message State
init =
    Transition { isHovered: false } []

view :: Props -> State -> DispatchMsgFn Message -> ReactElement
view props state dispatch =
    cardImage
        { image: fromMaybe "" props.image
        , title: props.title
        , placeholder:
            container
                { component: "div"
                }
                [ icon
                ]
        , height: 300.0
        , onMouseEnter: handle dispatch MouseEnter
        , onMouseLeave: handle dispatch MouseLeave
        }
    where
        icon =
            if state.isHovered && not props.readOnly then
                fileUpload
                    { id: "upload-new-photo"
                    , accept: "image/*"
                    , onChange: props.onChange
                    , button:
                        [ iconButton
                            { component: "span"
                            }
                            [ addAPhotoIcon
                                { fontSize: "large"
                                , color: "action"
                                }
                            ]
                        ]
                    }
            else
                restaurantMenuIcon
                    { fontSize: "large"
                    , color: "action"
                    }

update :: State -> Message -> Transition AppM Message State
update state msg = case msg of
    MouseEnter ->
        pure state { isHovered = true }
    MouseLeave ->
        pure state { isHovered = false }
