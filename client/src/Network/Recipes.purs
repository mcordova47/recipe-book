module Network.Recipes (listRecipes) where

import Prelude

import Affjax (defaultRequest, printResponseFormatError, request)
import Affjax.RequestHeader (RequestHeader(..))
import Affjax.ResponseFormat as ResponseFormat
import Control.Monad.Reader.Class (asks)
import Data.Argonaut (decodeJson)
import Data.Bifunctor (lmap)
import Data.Either (Either(..))
import Effect.Aff (attempt)
import Effect.Aff.Class (liftAff)
import Effect.Class (liftEffect)

import Types.AppM (AppM)
import Types.Recipe (Recipe)
import Util.LocalStorage as LocalStorage
import Util.LocalStorage (Key(KAuthToken))

listRecipes :: AppM (Either String (Array Recipe))
listRecipes = do
    jwt <- liftEffect $ LocalStorage.getItem KAuthToken
    baseUrl <- asks _.apiUrl
    eitherRes <- liftAff $ attempt $ request defaultRequest
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
