module Network.Auth (login, signup) where

import Prelude

import Affjax (post, printResponseFormatError)
import Affjax.RequestBody as RequestBody
import Affjax.ResponseFormat as ResponseFormat
import Data.Argonaut (decodeJson, encodeJson)
import Data.Bifunctor (lmap)
import Data.Either (Either(..))
import Effect.Aff (Aff, attempt)

import Types.Auth (AuthToken, LoginReq, SignupReq)

login :: String -> LoginReq -> Aff (Either String AuthToken)
login baseUrl req = do
    let body = encodeJson req
    eitherRes <- attempt $ post ResponseFormat.json (baseUrl <> "auth/login") (RequestBody.json body)
    case eitherRes of
        Right { body: Right body' } ->
            pure $ lmap show $ decodeJson body'
        Right { body: Left err } ->
            pure $ Left $ printResponseFormatError err
        Left err ->
            pure $ Left $ show err

signup :: String -> SignupReq -> Aff (Either String AuthToken)
signup baseUrl req = do
    let body = encodeJson req
    eitherRes <- attempt $ post ResponseFormat.json (baseUrl <> "auth/signup") (RequestBody.json body)
    case eitherRes of
        Right { body: Right body' } ->
            pure $ lmap show $ decodeJson body'
        Right { body: Left err } ->
            pure $ Left $ printResponseFormatError err
        Left err ->
            pure $ Left $ show err
