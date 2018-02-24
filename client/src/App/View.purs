module App.View where

import Prelude

import App.Events (Event(..))
import App.Filter (Filter(..))
import App.Markdown (Markdown(..), markdownParser, tryStripMarkdown)
import App.Routes (toURL)
import App.Routes as Routes
import App.State (FoodId(..), IngredientAmount(..), Measurement, Recipe, RecipeComponent(..), State(..), RecipesResponse)
import App.Tooltip as Tooltip
import CSS (CSS, Size, backgroundColor, borderRadius, height, margin, px, rgb, width)
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
import Network.RemoteData (RemoteData(..))
import Pux.DOM.Events as HE
import Pux.DOM.HTML (HTML, mapEvent)
import Pux.DOM.HTML.Attributes (style)
import Text.Parsing.Simple (parse)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))

view :: State -> HTML Event
view (State { view: route, recipes, tooltip, drawerOpened }) =
  H.div ! HA.className "main-layout" $ do
    navDrawer drawerOpened route recipes
    H.div ! HA.className "main-app" $ do
      header route
      mainView route recipes
      mapEvent TooltipEvent $ Tooltip.tooltipView tooltip

navDrawer :: Boolean -> Routes.Route -> RecipesResponse -> HTML Event
navDrawer opened route recipes =
  let classNames = if opened then "nav-drawer nav-drawer--opened" else "nav-drawer nav-drawer--closed"
  in
    H.nav ! HA.className classNames $ do
      H.div ! HA.className "nav-drawer__header" $ text "Recipes"
      recipeNavList route recipes

recipeNavList :: Routes.Route -> RecipesResponse -> HTML Event
recipeNavList route (Success recipes) =
  H.ul ! HA.className "nav-drawer__recipe-list" $
    for_ (listRecipes _.name recipes) $ recipeNavLink route
recipeNavList _ _ =
  text ""

recipeNavLink :: Routes.Route -> Tuple FoodId Recipe -> HTML Event
recipeNavLink route (Tuple (FoodId recipeId) recipe) =
  let classNames =
        if isRecipeSelected route recipeId then
          "nav-drawer__recipe-nav-link nav-drawer__recipe-nav-link--selected"
        else
          "nav-drawer__recipe-nav-link"
  in
    H.li ! HA.className classNames $
      H.a ! HA.href (toURL (Routes.Recipe recipeId)) $ text recipe.name

isRecipeSelected :: Routes.Route -> Int -> Boolean
isRecipeSelected (Routes.Recipe selectedId) recipeId =
  selectedId == recipeId
isRecipeSelected _ _ =
  false

header :: Routes.Route -> HTML Event
header route =
  H.div ! HA.className "header" $ do
    H.div ! HA.className "menu" #! HE.onClick (const ToggleDrawerState) $
      H.i ! HA.className "material-icons" $ text "menu"
    H.a ! HA.href (toURL Routes.Home) ! HA.className "header__title" $ text "Recipe Book"
    H.div ! HA.className "header__search" $
      H.input
        ! HA.value (searchTerm route)
        ! HA.placeholder "Search"
        #! HE.onChange ChangeSearch

mainView :: Routes.Route -> RecipesResponse -> HTML Event
mainView Routes.Home recipes =
  categoryList All recipes
mainView (Routes.Recipes filter') recipes =
  categoryList filter' recipes
mainView (Routes.Recipe recipeId) recipes =
  fromMaybe (text "") $ recipeMainView recipes $ FoodId recipeId

recipeMainView :: RecipesResponse -> FoodId -> Maybe (HTML Event)
recipeMainView (Success recipes) recipeId = do
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
recipeMainView Loading _ =
  Just recipePlaceholderView
recipeMainView _ _ =
  Nothing

recipePlaceholderView :: HTML Event
recipePlaceholderView =
  H.div ! HA.className "recipe-main-view" $ do
    placeholder 32.0 400.0 30.0 0.0
    placeholder 24.0 350.0 30.0 0.0
    placeholder 18.0 250.0 20.0 40.0
    placeholder 18.0 260.0 20.0 40.0
    placeholder 24.0 350.0 30.0 0.0
    placeholder 14.0 1000.0 20.0 0.0
    placeholder 14.0 1100.0 20.0 0.0
    placeholder 14.0 800.0 20.0 0.0

placeholder :: Number -> Number -> Number -> Number -> HTML Event
placeholder h w my mx =
  H.div
    ! style do
        backgroundColor (rgb 228 228 228)
        uniBorderRadius (3.0 # px)
        height (px h)
        width (px w)
        margin (px my) (px mx) (px my) (px mx)
    $ text ""

uniBorderRadius :: forall a. Size a -> CSS
uniBorderRadius size =
  borderRadius size size size size

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

categoryList :: Filter -> RecipesResponse -> HTML Event
categoryList filter' (Success recipes) =
  H.div ! HA.className "category-list-page" $
    H.div ! HA.className "category-list" $
      for_ (groupRecipes (filterRecipes filter' recipes)) $ categoryView recipes
categoryList _ _ =
  text ""

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
            Bold str ->
              H.b $ text str
            Italics str ->
              H.em $ text str
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

listRecipes :: forall a. Ord a => (Recipe -> a) -> Map.Map FoodId RecipeComponent -> List (Tuple FoodId Recipe)
listRecipes accessor recipes =
  recipes
    # Map.values
    # filterMap toRecipe
    # sortBy (compare `on` (accessor <<< snd))

groupRecipes :: Map.Map FoodId RecipeComponent -> List (NonEmptyList (Tuple FoodId Recipe))
groupRecipes recipes =
  recipes
    # listRecipes _.category
    # groupBy ((==) `on` (_.category <<< snd))

filterRecipes :: Filter -> Map.Map FoodId RecipeComponent -> Map.Map FoodId RecipeComponent
filterRecipes All = id
filterRecipes (Search term) =
  Map.filter (contains (Pattern (toLower term)) <<< toLower <<< getRecipeName)

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
searchTerm (Routes.Recipes (Search term)) = term
searchTerm _ = ""
