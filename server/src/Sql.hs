module Sql (sql) where

import Protolude

import Database.Esqueleto (SqlPersistT, runSqlPool)
import UnliftIO.Exception (tryAny)

import Types.Sql (HasSqlPool, sqlPool)

sql :: (MonadIO m, MonadReader r m, HasSqlPool r) => SqlPersistT IO a -> m (Either SomeException a)
sql q = do
    pool <- sqlPool <$> ask
    liftIO $ tryAny $ runSqlPool q pool
