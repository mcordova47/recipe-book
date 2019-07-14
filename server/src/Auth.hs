module Auth (AuthError(..), validateJWT) where

import Protolude hiding (exp)

import Data.Time.Clock.POSIX (getPOSIXTime)
import JWT (TokenInfo(..), TokenSupport, decodeJWT)

import Types.Auth (AuthToken(..), UserId)

data AuthError
    = InvalidToken
    | MissingToken
    | TokenExpired
    deriving (Show)

validateJWT ::
    ( MonadReader r m
    , TokenSupport r
    , MonadIO m
    )
    => Maybe AuthToken
    -> m (Either AuthError UserId)
validateJWT Nothing =
    pure $ Left MissingToken
validateJWT (Just (AuthToken token)) = do
    mInfo <- decodeJWT token
    now <- liftIO $ round <$> getPOSIXTime
    case mInfo of
        Nothing ->
            pure $ Left InvalidToken
        Just TokenInfo{ exp, payload } ->
            if now > exp then
                pure $ Left TokenExpired
            else
                case payload of
                    Nothing ->
                        pure $ Left InvalidToken
                    Just userId ->
                        pure $ Right userId
