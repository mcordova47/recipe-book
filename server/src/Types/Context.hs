module Types.Context where

import Protolude

import Control.Lens.TH (makeLenses)
import Control.Monad.Logger (runNoLoggingT)
import qualified Data.ByteString.Char8 as B
import Data.Pool (Pool)
import Database.Esqueleto (SqlBackend)
import Database.Persist.Postgresql (createPostgresqlPool)
import JWT (TokenSupport(..))
import System.Environment (getEnv)

import Types.Auth (JWTContext, mkJWTContext)
import Types.Sql (HasSqlPool(..))

data Context =
    Context
        { _jwt :: JWTContext
        , _pool :: Pool SqlBackend
        }

makeLenses ''Context

instance TokenSupport Context where
    secret = jwt . secret
    envAUD = jwt . envAUD
    envISS = jwt . envISS

instance HasSqlPool Context where
    sqlPool Context { _pool } = _pool

mkContext :: MonadIO m => m Context
mkContext = do
    _jwt <- mkJWTContext
    _pool <- liftIO mkSqlPool
    pure Context {..}
    where
        mkSqlPool =
            runNoLoggingT . (`createPostgresqlPool` 10) =<< B.pack <$> getEnv "DATABASE_URL"
