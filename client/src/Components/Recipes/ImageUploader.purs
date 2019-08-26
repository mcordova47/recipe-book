module Components.Recipes.ImageUploader (Props, view) where

import Prelude

import Data.Maybe (Maybe, fromMaybe)
import Effect (Effect)
import Elmish (JsCallback, ReactElement)
import Elmish.React.DOM (fragment)

import Styleguide.Atoms.FileUpload (fileUpload)
import Styleguide.Atoms.IconButton (iconButton)
import Styleguide.Icons.AddAPhoto (addAPhotoIcon)
import Styleguide.Icons.RestaurantMenu (restaurantMenuIcon)
import Styleguide.Layout.Card (cardImage)
import Styleguide.Layout.Container (container)
import Styleguide.Layout.CardActionArea (cardActionArea)

type Props =
    { image :: Maybe String
    , title :: String
    , readOnly :: Boolean
    , onChange :: JsCallback (String -> Effect Unit)
    }

view :: Props -> ReactElement
view props =
    wrapper
        [ cardImage
            { image: fromMaybe "" props.image
            , title: props.title
            , placeholder:
                container
                    { component: "div"
                    }
                    [ icon
                    ]
            , height: 300.0
            }
        ]
    where
        wrapper =
            if props.readOnly then
                fragment
            else
                cardActionArea {}
        icon =
            if props.readOnly then
                restaurantMenuIcon
                    { fontSize: "large"
                    , color: "action"
                    }
            else
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
