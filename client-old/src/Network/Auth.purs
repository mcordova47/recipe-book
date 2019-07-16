module Network.Auth (login, signup) where

import Prelude

import Control.Monad.Aff (Aff, attempt)
import Data.Argonaut.Generic.Aeson (decodeJson, encodeJson)
import Data.Bifunctor (bimap)
import Data.Either (Either)
import Network.HTTP.Affjax (AJAX, post)
import Types.Auth (AuthToken, LoginReq, SignupReq)

login :: forall e. String -> LoginReq -> Aff ( ajax :: AJAX | e ) (Either String AuthToken)
login baseUrl req = do
    let body = encodeJson req
    res <- attempt $ post (baseUrl <> "auth/login") body
    let token = bimap show _.response res >>= decodeJson
    pure token

signup :: forall e. String -> SignupReq -> Aff ( ajax :: AJAX | e ) (Either String AuthToken)
signup baseUrl req = do
    let body = encodeJson req
    let request = post (baseUrl <> "auth/signup") body
    res <- attempt request
    let token = bimap show _.response res >>= decodeJson
    pure token
