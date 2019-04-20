module Server (app) where

import Protolude

import Control.Monad.Reader (runReaderT)
import Network.Wai.Middleware.Cors (CorsResourcePolicy(..), cors, simpleMethods)
import Servant (Application, ServerT, hoistServer, serve)
import Servant.API ((:<|>)(..))

import API (API)
import Server.Auth (authServer)
import Server.Recipe (recipeServer)
import Types (AppM)
import Types.Context (Context)

app :: Context -> Application
app context =
    cors (const $ Just corsPolicy) $
    serve apiProxy $
    hoistServer apiProxy (`runReaderT` context) apiServer
    where
        apiProxy =
            Proxy @API
        corsPolicy =
            CorsResourcePolicy
                { corsOrigins = Nothing
                , corsMethods = simpleMethods ++ ["PUT", "DELETE", "PATCH"]
                , corsRequestHeaders =
                    [ "Content-Type"
                    , "Authorization"
                    , "Host"
                    , "User-Agent"
                    , "Origin"
                    , "Referer"
                    ]
                , corsExposedHeaders = Just ["*"]
                , corsMaxAge = Nothing
                , corsVaryOrigin = False
                , corsRequireOrigin = False
                , corsIgnoreFailures = False
                }

apiServer :: AppM r m => ServerT API m
apiServer =
    recipeServer :<|> authServer
