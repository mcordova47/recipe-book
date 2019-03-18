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
    _jcSecret <- Secret <$> getEnv "JWT_SECRET"
    _jcAUD <- AUD <$> getEnv "JWT_AUD"
    _jcISS <- ISS <$> getEnv "JWT_ISS"
    let jwtContext = JWTContext {..}
    putStrLn $ "Starting server on port " ++ show port ++ "..."
    run port $ app jwtContext
