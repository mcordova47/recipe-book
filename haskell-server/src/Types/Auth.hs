module Types.Auth
    ( AuthToken(..)
    , JWTContext(..)
    , LoginReq(..)
    , SignupReq(..)
    , UserId(..)
    ) where

import Protolude

import Control.Lens.TH (makeLenses)
import Data.Aeson (FromJSON, ToJSON)
import Data.Text (Text)
import JWT (AUD, ISS, Secret, TokenSupport(..))
import Servant.API (FromHttpApiData)

-- TODO: Remove and switch to JWT.Token
newtype AuthToken =
    AuthToken Text
    deriving (Show, Generic)
    deriving anyclass (ToJSON)
    deriving newtype (FromHttpApiData)

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
    deriving (Show, Generic)
    deriving anyclass (ToJSON)

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
