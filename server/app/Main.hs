module Main where

import Protolude

import Network.Wai.Handler.Warp (run)
import System.Environment (lookupEnv)

import Server (app)
import Types.Context (mkContext)

main :: IO ()
main = do
    port <- fromMaybe 8081 . (>>= readMaybe) <$> lookupEnv "PORT"
    ctx <- mkContext
    putStrLn $ "Starting server on port " ++ show port ++ "..."
    run port $ app ctx
