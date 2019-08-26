module Styleguide.Atoms.FileUpload (FileUploadProps, OptFileUploadProps, fileUpload) where

import Prelude

import Effect (Effect)
import Elmish (JsCallback, createElement')
import Elmish.React (class ReactChildren)
import Elmish.React.Import (ImportedReactComponent, ImportedReactComponentConstructor)

type FileUploadProps children r =
    ( id :: String
    , button :: children
    , accept :: String
    , onChange :: JsCallback (String -> Effect Unit)
    | r
    )

type OptFileUploadProps r =
    ( multiple :: Boolean
    , capture :: String
    | r
    )

fileUpload ::
    forall children. ReactChildren children
    => ImportedReactComponentConstructor (FileUploadProps children) OptFileUploadProps
fileUpload =
    createElement' fileUpload_

foreign import fileUpload_ :: ImportedReactComponent
