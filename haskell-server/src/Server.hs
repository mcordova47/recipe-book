module Server (app) where

import Protolude

import Control.Monad.Reader (ReaderT, runReaderT)
import Network.Wai.Middleware.Cors (CorsResourcePolicy(..), cors, simpleMethods)
import Servant (Application, Handler, ServerT, hoistServer, serve)
import Servant.API ((:<|>)(..))

import API (API)
import Server.Auth (authServer)
import Server.Recipe (recipeServer)
import Types.Auth (JWTContext)

app :: JWTContext -> Application
app jwtContext =
    cors (const $ Just corsPolicy) $
    serve apiProxy $
    hoistServer apiProxy (`runReaderT` jwtContext) apiServer
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

apiServer :: ServerT API (ReaderT JWTContext Handler)
apiServer =
    recipeServer :<|> authServer
