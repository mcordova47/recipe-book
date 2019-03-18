module Main where

import Protolude

import JWT (AUD(..), ISS(..), Secret(..))
import Network.Wai.Handler.Warp (run)
import System.Environment (getEnv, lookupEnv)

import Server (app)
import Types.Auth (JWTContext(..))

main :: IO ()
main = do
    port <- fromMaybe 8081 . (>>= readMaybe) <$> lookupEnv "PORT"
    jwtSecret <- getEnv "JWT_SECRET"
    jwtAUD <- getEnv "JWT_AUD"
    jwtISS <- getEnv "JWT_ISS"
    let _jcSecret = Secret { getSecret = jwtSecret }
    let _jcAUD = AUD { getAUD = jwtAUD }
    let _jcISS = ISS { getISS = jwtISS }
    let jwtContext = JWTContext {..}
    putStrLn $ "Starting server on port " ++ show port ++ "..."
    run port $ app jwtContext
