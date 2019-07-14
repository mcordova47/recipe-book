module Types.Auth
    ( AuthToken(..)
    , JWTContext(..)
    , LoginReq(..)
    , SignupReq(..)
    , UserId(..)
    , mkJWTContext
    ) where

import Protolude

import Control.Lens.TH (makeLenses)
import Control.Monad.IO.Class (MonadIO)
import Data.Aeson (FromJSON, ToJSON)
import Data.Text (Text)
import JWT (AUD(..), ISS(..), Secret(..), Token(..), TokenSupport(..))
import Servant.API (FromHttpApiData(..))
import System.Environment (getEnv)

newtype AuthToken =
    AuthToken Token
    deriving (Show, Generic)
    deriving anyclass (ToJSON)

instance FromHttpApiData AuthToken where
    parseUrlPiece = pure . AuthToken . Token

data LoginReq =
    LoginReq
        { username :: Text
        , password :: Text
        }
        deriving (Show, FromJSON, Generic)

data SignupReq =
    SignupReq
        { username :: Text
        , password :: Text
        , confirmPassword :: Text
        }
        deriving (Show, FromJSON, Generic)

newtype UserId =
    UserId { unUserId :: Int }
    deriving (Eq, Show, Generic)
    deriving anyclass (FromJSON, ToJSON)

data JWTContext =
    JWTContext
        { _jcSecret :: Secret
        , _jcAUD :: AUD
        , _jcISS :: ISS
        }
        deriving (Show, Generic)

makeLenses ''JWTContext

instance TokenSupport JWTContext where
    secret = jcSecret
    envAUD = jcAUD
    envISS = jcISS

mkJWTContext :: MonadIO m => m JWTContext
mkJWTContext = do
    _jcSecret <- liftIO $ Secret <$> getEnv "JWT_SECRET"
    _jcAUD <- liftIO $ AUD <$> getEnv "JWT_AUD"
    _jcISS <- liftIO $ ISS <$> getEnv "JWT_ISS"
    pure JWTContext {..}
