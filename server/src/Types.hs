module Types (AppM) where

import Control.Monad.Except (MonadError)
import Control.Monad.IO.Class (MonadIO)
import Control.Monad.Reader (MonadReader)
import JWT (TokenSupport)
import Servant.Server (ServantErr)

import Types.Sql (HasSqlPool)

type AppM r m =
    ( MonadReader r m
    , TokenSupport r
    , HasSqlPool r
    , MonadIO m
    , MonadError ServantErr m
    )
