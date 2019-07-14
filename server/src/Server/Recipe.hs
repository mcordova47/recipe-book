module Server.Recipe (recipeServer) where

import Protolude

import Servant (ServerT, err401)

import API.Recipe (RecipeAPI)
import Auth (validateJWT)
import qualified Handlers.Recipe as H
import Types (AppM)
import Types.Auth (UserId(..))
import Types.Recipe (Recipe(..))

recipeServer :: AppM r m => ServerT RecipeAPI m
recipeServer authToken =
    listRecipes
    where
        listRecipes :: AppM r m => m [Recipe]
        listRecipes =
            validateJWT authToken >>= \case
                Left _ -> throwError err401
                -- TODO: Add users to database
                Right userId | userId == UserId 1 -> H.listRecipes
                _ -> pure []
