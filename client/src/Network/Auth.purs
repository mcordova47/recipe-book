module Network.Auth (login, signup) where

import Prelude

import Affjax (post, printResponseFormatError)
import Affjax.RequestBody as RequestBody
import Affjax.ResponseFormat as ResponseFormat
import Control.Monad.Reader.Class (asks)
import Data.Argonaut (decodeJson, encodeJson)
import Data.Bifunctor (lmap)
import Data.Either (Either(..))
import Effect.Aff (attempt)
import Effect.Aff.Class (liftAff)

import Types.AppM (AppM)
import Types.Auth (AuthToken, LoginReq, SignupReq)

login :: LoginReq -> AppM (Either String AuthToken)
login req = do
    let body = encodeJson req
    baseUrl <- asks _.apiUrl
    eitherRes <- liftAff $ attempt $ post ResponseFormat.json (baseUrl <> "auth/login") (RequestBody.json body)
    case eitherRes of
        Right { body: Right body' } ->
            pure $ lmap show $ decodeJson body'
        Right { body: Left err } ->
            pure $ Left $ printResponseFormatError err
        Left err ->
            pure $ Left $ show err

signup :: SignupReq -> AppM (Either String AuthToken)
signup req = do
    let body = encodeJson req
    baseUrl <- asks _.apiUrl
    eitherRes <- liftAff $ attempt $ post ResponseFormat.json (baseUrl <> "auth/signup") (RequestBody.json body)
    case eitherRes of
        Right { body: Right body' } ->
            pure $ lmap show $ decodeJson body'
        Right { body: Left err } ->
            pure $ Left $ printResponseFormatError err
        Left err ->
            pure $ Left $ show err
