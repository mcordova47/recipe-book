module App.View where

import Prelude

import App.Events (Event(..))
import App.State (Filter(..), FoodId(..), IngredientAmount(..), Measurement, Recipe, RecipeComponent(..), State(..), View(..))
import App.Tooltip as Tooltip
import Data.Either (Either(..))
import Data.Filterable (filterMap)
import Data.Foldable (foldl, for_)
import Data.Function (on)
import Data.List (List, groupBy, sortBy, find)
import Data.List.Types (NonEmptyList(..))
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.Newtype (unwrap)
import Data.NonEmpty (head)
import Data.Number.Format (fixed, toString, toStringWith)
import Data.String (Pattern(..), contains, toLower)
import Markdown (Markdown(..), markdownParser, tryStripMarkdown)
import Network.RemoteData (RemoteData(..))
import Pux.DOM.Events as HE
import Pux.DOM.HTML (HTML, mapEvent)
import Text.Parsing.Simple (parse)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))

view :: State -> HTML Event
view (State { view: viewType, recipes, tooltip }) =
  H.div $ do
    header viewType
    mainView viewType recipes
    mapEvent TooltipEvent $ Tooltip.tooltipView tooltip

header :: View -> HTML Event
header viewType =
  H.div ! HA.className "header" $ do
    H.div ! HA.className "header__title" $ text "Recipe Book"
    H.div ! HA.className "header__search" $
      H.input
        ! HA.value (searchTerm viewType)
        ! HA.placeholder "Search"
        #! HE.onChange ChangeSearch

mainView :: View -> RemoteData String (Map.Map FoodId RecipeComponent) -> HTML Event
mainView viewType (Success recipes) =
  case viewType of
    CategoryView filter' ->
      categoryList filter' recipes
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

    Just (RecipeComp _ recipe@{ unitType, name }) ->
      H.li $ do
        text (toString amount <> " " <> show unitType <> " ")
        H.span
          ! HA.className "ingredient-view__recipe-link"
          #! HE.onClick (\_ -> SelectRecipe recipe)
          $ text name

    Nothing ->
      text ""

categoryList :: Filter -> Map.Map FoodId RecipeComponent -> HTML Event
categoryList filter' recipes =
  H.div ! HA.className "category-list-page" $
    H.div ! HA.className "category-list" $
      for_ (groupRecipes (filterRecipes filter' recipes)) $ categoryView recipes

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

groupRecipes :: Map.Map FoodId RecipeComponent -> List (NonEmptyList Recipe)
groupRecipes recipes =
  recipes
    # Map.values
    # filterMap toRecipe
    # sortBy (compare `on` _.category)
    # groupBy ((==) `on` _.category)

filterRecipes :: Filter -> Map.Map FoodId RecipeComponent -> Map.Map FoodId RecipeComponent
filterRecipes All = id
filterRecipes (Search term) =
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

getRecipeName :: RecipeComponent -> String
getRecipeName recipeComp =
  case recipeComp of
    RecipeComp _ { name } -> name
    IngredientComp _ { name } -> name

formatCost :: Number -> String
formatCost cost =
  "$" <> toStringWith (fixed 2) cost

toRecipe :: RecipeComponent -> Maybe Recipe
toRecipe (RecipeComp _ recipe) = Just recipe
toRecipe _ = Nothing

searchTerm :: View -> String
searchTerm (CategoryView (Search term)) = term
searchTerm _ = ""
