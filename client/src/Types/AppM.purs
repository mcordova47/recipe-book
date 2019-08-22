module Types.AppM (AppM, Context, runAppM) where

import Prelude

import Control.Monad.Reader (ReaderT, runReaderT)
import Effect.Aff (Aff)

type AppM = ReaderT Context Aff

type Context =
    { apiUrl :: String
    }

runAppM :: Context -> AppM ~> Aff
runAppM ctx m =
    runReaderT m ctx
