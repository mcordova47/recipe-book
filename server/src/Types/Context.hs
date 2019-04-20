module Types.Context (Context, mkContext) where

import Protolude

import Control.Lens.TH (makeLenses)
import JWT (TokenSupport(..))

import Types.Auth (JWTContext, mkJWTContext)

data Context =
    Context
        { _jwt :: JWTContext
        }

makeLenses ''Context

instance TokenSupport Context where
    secret = jwt . secret
    envAUD = jwt . envAUD
    envISS = jwt . envISS

mkContext :: MonadIO m => m Context
mkContext = do
    _jwt <- mkJWTContext
    pure Context {..}
