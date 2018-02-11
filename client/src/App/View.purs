module App.View where

import Prelude

import App.Events (Event(..))
import App.State (State(..), Recipe, IngredientAmount(..), RecipeComponent(..), View(..), FoodId)
import Data.Filterable (filterMap)
import Data.Foldable (foldl, for_)
import Data.Function (on)
import Data.List (List, groupBy, sortBy)
import Data.List.Types (NonEmptyList(..))
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.NonEmpty (head)
import Data.Number.Format (fixed, toString, toStringWith)
import Pux.DOM.Events as HE
import Pux.DOM.HTML (HTML)
import Network.RemoteData (RemoteData(..))
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))

view :: State -> HTML Event
view (State { view: viewType, recipes }) =
  H.div $ do
    header
    mainView viewType recipes

header :: HTML Event
header =
  H.div ! HA.className "header" $
    H.div ! HA.className "header__title" $ text "Recipe Book"

mainView :: View -> RemoteData String (Map.Map FoodId RecipeComponent) -> HTML Event
mainView viewType (Success recipes) =
  case viewType of
    CategoryView ->
      categoryList recipes
    RecipeView recipe ->
      recipeMainView recipes recipe
mainView _ _ =
  text ""

recipeMainView :: Map.Map FoodId RecipeComponent -> Recipe -> HTML Event
recipeMainView recipes recipe =
  H.div ! HA.className "recipe-main-view" $ do
    H.h2 $ text recipe.name
    H.div $ do
      H.h3 $ text "Ingredients"
      H.ul $ for_ recipe.ingredients $ ingredientView recipes
    H.div $ do
      H.h3 $ text "Directions"
      H.p $ text recipe.directions

ingredientView :: Map.Map FoodId RecipeComponent -> IngredientAmount -> HTML Event
ingredientView recipes (IngredientAmount { ingredient, amount }) =
  case Map.lookup ingredient recipes of
    Just (IngredientComp _ { unitType, name }) ->
      H.li $ text
        (toString amount <> " " <> show unitType <> " " <> name)

    Just (RecipeComp _ recipe@{ unitType, name }) ->
      H.li $ do
        text (toString amount <> " " <> show unitType <> " ")
        H.span
          ! HA.className "ingredient-view__recipe-link"
          #! HE.onClick (\_ -> SelectRecipe recipe)
          $ text name

    Nothing ->
      text ""

categoryList :: Map.Map FoodId RecipeComponent -> HTML Event
categoryList recipes =
  H.div ! HA.className "category-list" $
    for_ (groupRecipes recipes) $ categoryView recipes

categoryView :: Map.Map FoodId RecipeComponent -> NonEmptyList Recipe -> HTML Event
categoryView recipeMap (NonEmptyList recipes) =
  H.div $ do
    let first = head recipes
    H.h2 $ text $ first.category
    H.div ! HA.className "recipe-grid" $ for_ recipes $ recipeView recipeMap

recipeView :: Map.Map FoodId RecipeComponent -> Recipe -> HTML Event
recipeView recipes recipe =
  H.div ! HA.className "recipe-view" #! HE.onClick (\_ -> SelectRecipe recipe) $ do
    H.div ! HA.className "recipe-view__title" $ text recipe.name
    H.div ! HA.className "recipe-view__directions" $ text recipe.directions
    H.div ! HA.className "recipe-view__cost" $ text $ formatCost $ getCost recipes recipe.ingredients

groupRecipes :: Map.Map FoodId RecipeComponent -> List (NonEmptyList Recipe)
groupRecipes recipes =
  recipes
    # Map.values
    # filterMap toRecipe
    # sortBy (compare `on` _.category)
    # groupBy ((==) `on` _.category)

getCost :: Map.Map FoodId RecipeComponent -> List IngredientAmount -> Number
getCost recipes =
  foldl (\total (IngredientAmount { ingredient, amount }) ->
    case Map.lookup ingredient recipes of
      Just (IngredientComp _ { unitCost, amount: totalAmount }) ->
        total + (amount / totalAmount) * unitCost
      Just (RecipeComp _ { ingredients, amount: totalAmount }) ->
        total + (amount / totalAmount) * getCost recipes ingredients
      Nothing ->
        0.0
    ) 0.0

formatCost :: Number -> String
formatCost cost =
  "$" <> toStringWith (fixed 2) cost

toRecipe :: RecipeComponent -> Maybe Recipe
toRecipe (RecipeComp _ recipe) = Just recipe
toRecipe _ = Nothing
