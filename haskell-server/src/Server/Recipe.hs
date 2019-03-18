module Server.Recipe (recipeServer) where

import Protolude

import Control.Monad.Reader (ReaderT)
import Servant (Handler, ServerT, err401, err403, err404)
import Servant.API ((:<|>)(..))

import API.Recipe (RecipeAPI)
import Auth (validateJWT)
import Types.Auth (JWTContext, UserId(..))
import Types.Measurement (Measurement(..), VolumeMeasurement(..))
import Types.Recipe
    ( FoodId
    , IngredientAmount(..)
    , Recipe(..)
    , RecipeComponent(..)
    )

recipeServer :: ServerT RecipeAPI (ReaderT JWTContext Handler)
recipeServer authToken =
    listRecipes :<|> getRecipe
    where
        listRecipes :: ReaderT JWTContext Handler [Recipe]
        listRecipes =
            validateJWT authToken >>= \case
                Left _ -> throwError err401
                Right userId | userId == UserId 1 -> pure recipes
                _ -> pure []

        getRecipe :: FoodId -> ReaderT JWTContext Handler Recipe
        getRecipe fid =
            validateJWT authToken >>= \case
                Left _ -> throwError err401
                Right userId | userId == UserId 1 ->
                    case find ((==) fid . id) recipes of
                        Nothing -> throwError err404
                        Just r -> pure r
                _ -> throwError err403

recipes :: [Recipe]
recipes =
    [ricottaGnocchi, ricotta]

ricottaGnocchi :: Recipe
ricottaGnocchi =
  Recipe
      { id = 2
      , name = "Ricotta Gnocchi"
      , category = "Main"
      , ingredients =
            [ IngredientAmount
                { ingredient = RecipeComp ricotta
                , amount = 2
                , unitType = Volume Cups
                }
            ]
      , unitType = Volume Cups
      , amount = 3.5
      , directions =
            "Stir together {ricotta}[1], {eggs}[5], 1 cup cheese, \
            \nutmeg, and 1/4 teaspoon each of salt and pepper. Add \
            \{flour}[6], stirring to form a soft, wet dough.\n\
            \Shape dough on a well-floured surface with lightly floured\
            \ hands into 2 (1-inch-thick) ropes. Cut crosswise into \
            \1-inch pieces with a lightly floured knife. Put in 1 layer\
            \ on a lightly floured parchment-lined baking sheet.\n\
            \Cook gnocchi in 2 batches in a pasta pot of boiling salted\
            \ water (3 tablespoons salt for 6 quarts water), adding a \
            \few at a time to pot and stirring occasionally, until \
            \cooked through (cut one in half to check), 3 to 4 minutes \
            \per batch. Lift out with a slotted spoon and drain in \
            \colander.\n\
            \Meanwhile, cook butter with rosemary in a 12-inch heavy \
            \skillet over medium-low heat until golden brown, about 5 \
            \minutes.\n\
            \Toss gnocchi with brown butter in skillet and sprinkle \
            \with remaining 1/2 cup cheese. Season with salt."
      , cupsToLbs = Nothing
      }

ricotta :: Recipe
ricotta =
    Recipe
        { id = 1
        , name = "Ricotta"
        , category = "Side"
        , ingredients = []
        , unitType = Volume Cups
        , amount = 3
        , directions =
              "Line a large sieve with a layer of heavy-duty (fine-mesh) \
              \cheesecloth and place it over a large bowl.\n\
              \Slowly bring milk and cream to a rolling boil in a 6-quart \
              \heavy pot over moderate heat, stirring occasionally to \
              \prevent scorching. Add vinegar, then reduce heat to low and \
              \simmer, stirring constantly, until the mixture curdles, \
              \about 2 minutes.\n\
              \Pour the mixture into the lined sieve and let it drain 1 \
              \hour. After discarding the liquid, chill the ricotta, \
              \covered; it will keep in the refrigerator 2 days."
        , cupsToLbs = Nothing
        }
