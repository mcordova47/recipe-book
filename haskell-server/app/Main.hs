module Main where

import Protolude

import Network.Wai.Handler.Warp (run)

import Server (app)

main :: IO ()
main = do
    let port = 8081
    print $ "Starting server on port " ++ show port ++ "..."
    run port app
