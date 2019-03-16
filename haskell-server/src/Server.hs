module Server (app, recipeServer) where

import Protolude

import Network.Wai.Middleware.Cors (CorsResourcePolicy(..), cors, simpleMethods)
import Servant (Application, Handler, Server, err404, serve)
import Servant.API ((:<|>)(..))

import API (RecipeAPI)
import Types.Measurement (Measurement(..), VolumeMeasurement(..))
import Types.Recipe
    ( FoodId
    , IngredientAmount(..)
    , Recipe(..)
    , RecipeComponent(..)
    )

app :: Application
app =
    cors (const $ Just corsPolicy) $
    serve apiProxy recipeServer
    where
        apiProxy =
            Proxy @RecipeAPI
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

recipeServer :: Server RecipeAPI
recipeServer =
    listRecipes
    :<|>
    getRecipe
    where
        listRecipes :: Handler [Recipe]
        listRecipes =
            pure recipes

        getRecipe :: FoodId -> Handler Recipe
        getRecipe fid =
            case find ((==) fid . id) recipes of
                Just r -> pure r
                Nothing -> throwError err404

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
