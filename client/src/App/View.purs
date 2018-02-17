module App.View where

import Prelude

import App.Events (Event(..))
import App.Routes (toURL)
import App.Routes as Routes
import App.State (FoodId(..), IngredientAmount(..), Measurement, Recipe, RecipeComponent(..), State(..))
import App.Tooltip as Tooltip
import Data.Either (Either(..))
import Data.Filterable (filterMap)
import Data.Foldable (foldl, for_)
import Data.Function (on)
import Data.List (List, groupBy, sortBy, find)
import Data.List.Types (NonEmptyList(..))
import Data.Map as Map
import Data.Maybe (Maybe(..), fromMaybe)
import Data.Newtype (unwrap)
import Data.NonEmpty (head)
import Data.Number.Format (fixed, toString, toStringWith)
import Data.String (Pattern(..), contains, toLower)
import Data.Tuple (Tuple(..), snd)
import Markdown (Markdown(..), markdownParser, tryStripMarkdown)
import Network.RemoteData (RemoteData(..))
import Pux.DOM.Events as HE
import Pux.DOM.HTML (HTML, mapEvent)
import Text.Parsing.Simple (parse)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))

view :: State -> HTML Event
view (State { view: route, recipes, tooltip }) =
  H.div $ do
    header route
    mainView route recipes
    mapEvent TooltipEvent $ Tooltip.tooltipView tooltip

header :: Routes.Route -> HTML Event
header route =
  H.div ! HA.className "header" $ do
    H.div ! HA.className "header__title" $ text "Recipe Book"
    H.div ! HA.className "header__search" $
      H.input
        ! HA.value (searchTerm route)
        ! HA.placeholder "Search"
        #! HE.onChange ChangeSearch

mainView :: Routes.Route -> RemoteData String (Map.Map FoodId RecipeComponent) -> HTML Event
mainView route (Success recipes) =
  case route of
    Routes.Home ->
      categoryList Routes.All recipes
    Routes.Recipes filter' ->
      categoryList filter' recipes
    Routes.Recipe id ->
      fromMaybe (text "") $ recipeMainView recipes $ FoodId id
mainView _ _ =
  text ""

recipeMainView :: Map.Map FoodId RecipeComponent -> FoodId -> Maybe (HTML Event)
recipeMainView recipes recipeId = do
  recipe <- getRecipe recipeId recipes
  pure $
    H.div ! HA.className "recipe-main-view" $ do
      H.h2 $ text recipe.name
      H.div $ do
        H.h3 $ text "Ingredients"
        H.ul ! HA.className "ingredient-list" $ for_ recipe.ingredients $ ingredientView recipes
      H.div $ do
        H.h3 $ text "Directions"
        recipeDirections recipes recipe

ingredientView :: Map.Map FoodId RecipeComponent -> IngredientAmount -> HTML Event
ingredientView recipes (IngredientAmount { ingredient, amount }) =
  case Map.lookup ingredient recipes of
    Just (IngredientComp _ { unitType, name }) ->
      H.li $ text
        (toString amount <> " " <> show unitType <> " " <> name)

    Just (RecipeComp (FoodId recipeId) { unitType, name }) ->
      H.li $ do
        text (toString amount <> " " <> show unitType <> " ")
        H.a
          ! HA.className "ingredient-view__recipe-link"
          ! HA.href (toURL (Routes.Recipe recipeId))
          $ text name

    Nothing ->
      text ""

categoryList :: Routes.Filter -> Map.Map FoodId RecipeComponent -> HTML Event
categoryList filter' recipes =
  H.div ! HA.className "category-list-page" $
    H.div ! HA.className "category-list" $
      for_ (groupRecipes (filterRecipes filter' recipes)) $ categoryView recipes

categoryView :: Map.Map FoodId RecipeComponent -> NonEmptyList (Tuple FoodId Recipe) -> HTML Event
categoryView recipeMap (NonEmptyList recipes) =
  H.div $ do
    let first = snd $ head recipes
    H.h2 $ text $ first.category
    H.div ! HA.className "recipe-grid" $ for_ recipes $ recipeView recipeMap

recipeView :: Map.Map FoodId RecipeComponent -> Tuple FoodId Recipe -> HTML Event
recipeView recipes (Tuple (FoodId recipeId) recipe) =
  H.a ! HA.className "recipe-view-card-link" ! HA.href (toURL (Routes.Recipe recipeId)) $
    H.div ! HA.className "recipe-view" $ do
      H.div ! HA.className "recipe-view__title" $ text recipe.name
      H.div ! HA.className "recipe-view__directions" $ text $ tryStripMarkdown recipe.directions
      H.div ! HA.className "recipe-view__cost" $ text $ formatCost $ getCost recipes recipe.ingredients

recipeDirections :: Map.Map FoodId RecipeComponent -> Recipe -> HTML Event
recipeDirections recipes recipe =
  let md = parse markdownParser recipe.directions
  in
    H.div ! HA.className "recipe-directions" $
      case parse markdownParser recipe.directions of
        Right mdList ->
          for_ mdList $ case _ of
            Space ->
              text " "
            Word str ->
              text str
            Link label id ->
              case recipeLink recipes recipe.ingredients label id of
                Just html -> html
                Nothing -> text label
        Left _ ->
          text recipe.directions

recipeLink :: Map.Map FoodId RecipeComponent -> List IngredientAmount -> String -> Int -> Maybe (HTML Event)
recipeLink recipes ingredients label id = do
  IngredientAmount { ingredient, amount } <- find ((==) (FoodId id) <<< _.ingredient <<< unwrap) ingredients
  recipeComp <- Map.lookup ingredient recipes
  let unitType = getUnitType recipeComp
  let name = getRecipeName recipeComp
  pure $ mapEvent TooltipEvent $ Tooltip.label label (toString amount <> " " <> show unitType <> " " <> name)

groupRecipes :: Map.Map FoodId RecipeComponent -> List (NonEmptyList (Tuple FoodId Recipe))
groupRecipes recipes =
  recipes
    # Map.values
    # filterMap toRecipe
    # sortBy (compare `on` (_.category <<< snd))
    # groupBy ((==) `on` (_.category <<< snd))

filterRecipes :: Routes.Filter -> Map.Map FoodId RecipeComponent -> Map.Map FoodId RecipeComponent
filterRecipes Routes.All = id
filterRecipes (Routes.Search term) =
  Map.filter (contains (Pattern term) <<< toLower <<< getRecipeName)

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

getUnitType :: RecipeComponent -> Measurement
getUnitType recipeComp =
  case recipeComp of
    RecipeComp _ { unitType } -> unitType
    IngredientComp _ { unitType } -> unitType

getRecipe :: FoodId -> Map.Map FoodId RecipeComponent -> Maybe Recipe
getRecipe recipeId recipes = do
  recipeComp <- Map.lookup recipeId recipes
  case recipeComp of
    RecipeComp _ recipe -> pure recipe
    _ -> Nothing

getRecipeName :: RecipeComponent -> String
getRecipeName recipeComp =
  case recipeComp of
    RecipeComp _ { name } -> name
    IngredientComp _ { name } -> name

formatCost :: Number -> String
formatCost cost =
  "$" <> toStringWith (fixed 2) cost

toRecipe :: RecipeComponent -> Maybe (Tuple FoodId Recipe)
toRecipe (RecipeComp recipeId recipe) = Just $ Tuple recipeId recipe
toRecipe _ = Nothing

searchTerm :: Routes.Route -> String
searchTerm (Routes.Recipes (Routes.Search term)) = term
searchTerm _ = ""
