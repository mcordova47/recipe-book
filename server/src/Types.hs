module Types (AppM) where

import Control.Monad.Except (MonadError)
import Control.Monad.IO.Class (MonadIO)
import Control.Monad.Reader (MonadReader)
import JWT (TokenSupport)
import Servant.Server (ServantErr)

type AppM r m =
    ( MonadReader r m
    , TokenSupport r
    , MonadIO m
    , MonadError ServantErr m
    )
