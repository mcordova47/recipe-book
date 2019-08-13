module Network.Recipes (listRecipes) where

import Prelude

import Affjax (defaultRequest, printResponseFormatError, request)
import Affjax.RequestHeader (RequestHeader(..))
import Affjax.ResponseFormat as ResponseFormat
import Data.Argonaut (decodeJson)
import Data.Bifunctor (lmap)
import Data.Either (Either(..))
import Effect.Aff (Aff, attempt)
import Effect.Class (liftEffect)

import Types.Recipe (Recipe)
import Util.LocalStorage as LocalStorage
import Util.LocalStorage (Key(KAuthToken))

listRecipes :: String -> Aff (Either String (Array Recipe))
listRecipes baseUrl = do
    jwt <- liftEffect $ LocalStorage.getItem KAuthToken
    eitherRes <- attempt $ request defaultRequest
        { url = baseUrl <> "recipes"
        , headers = [RequestHeader "Authorization" jwt]
        , responseFormat = ResponseFormat.json
        }
    case eitherRes of
        Right { body: Right body } ->
            pure $ lmap show $ decodeJson body
        Right { body: Left err } ->
            pure $ Left $ printResponseFormatError err
        Left err ->
            pure $ Left $ show err
