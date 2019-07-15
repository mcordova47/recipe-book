module Server.Recipe (recipeServer) where

import Protolude

import Servant (ServerT, err401)

import API.Recipe (RecipeAPI)
import Auth (validateJWT)
import qualified Handlers.Recipe as H
import Types (AppM)
import Types.Recipe (Recipe(..))

recipeServer :: AppM r m => ServerT RecipeAPI m
recipeServer authToken =
    listRecipes
    where
        listRecipes :: AppM r m => m [Recipe]
        listRecipes =
            validateJWT authToken >>= \case
                Left _ -> throwError err401
                _-> H.listRecipes
