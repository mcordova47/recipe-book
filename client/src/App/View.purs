module App.View where

import Prelude

import App.Events (Event(..))
import App.Filter (Filter(..))
import App.Loader as Loader
import App.Login as Login
import App.Markdown (Markdown(..), Inline(..))
import App.Markdown as Markdown
import App.Measurement (Measurement, convertMeasurement)
import App.RecipeEditor as RecipeEditor
import App.Routes (link)
import App.Routes as Routes
import App.State (FoodId(..), IngredientAmount(..), Recipe, RecipeComponent(..), State(..), RecipesResponse)
import App.Tooltip as Tooltip
import CSS (CSS, Size, backgroundColor, borderRadius, height, margin, px, rgb, width)
import Data.Filterable (filterMap)
import Data.Foldable (foldl, for_)
import Data.Function (on)
import Data.List (List, groupBy, sortBy, find)
import Data.List.Types (NonEmptyList(..))
import Data.Map (Map)
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
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))
import Text.Smolder.SVG as SVG
import Text.Smolder.SVG.Attributes as SA
import Util.Url (Slug, slugify)

view :: State -> HTML Event
view (s'@(State s)) =
  H.div ! HA.className "main-layout" $ do
    navDrawer s.drawerOpened s.view s.recipes
    H.div ! HA.className "main-app" $ do
      header s.view
      mainView s'
      mapEvent TooltipEvent $ Tooltip.tooltip s.tooltip

scrollContainer :: Boolean -> HTML Event -> HTML Event
scrollContainer drawerOpened html =
  let classModifier = if drawerOpened then "opened" else "closed"
  in
    H.div
      ! HA.className ("scroll-container scroll-container--" <> classModifier)
      $ html

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
    for_ (listRecipes _.name recipes) (recipeNavLink route <<< snd)
recipeNavList _ _ =
  text ""

recipeNavLink :: Routes.Route -> Recipe -> HTML Event
recipeNavLink route recipe =
  let classNames =
        if isRecipeSelected route (slugify recipe.name) then
          "nav-drawer__recipe-nav-link nav-drawer__recipe-nav-link--selected"
        else
          "nav-drawer__recipe-nav-link"
  in
    H.li ! HA.className classNames $
      link (Routes.Recipe Routes.ReadMode $ slugify recipe.name) $ text recipe.name

isRecipeSelected :: Routes.Route -> Slug -> Boolean
isRecipeSelected (Routes.Recipe _ selectedSlug) slug =
  selectedSlug == slug
isRecipeSelected _ _ =
  false

header :: Routes.Route -> HTML Event
header route =
  H.div ! HA.className "header" $ do
    H.div ! HA.className "menu" #! HE.onClick (const ToggleDrawerState) $
      H.i ! HA.className "material-icons" $ text "menu"
    link (Routes.Home) ! HA.className "header__title" $ text "Recipe Book"
    H.div ! HA.className "header__search" $
      H.div ! HA.className "header__search__input" $ do
        H.div
          ! HA.className "header__search__input__icon"
          $ searchIcon
        H.input
          ! HA.value (searchTerm route)
          ! HA.placeholder "Search"
          #! HE.onChange ChangeSearch

searchIcon :: HTML Event
searchIcon =
  SVG.svg
    ! SA.height "24"
    ! SA.viewBox "0 0 24 24"
    ! SA.width "24"
    $ do
        SVG.path
          ! SA.d "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          $ text ""
        SVG.path
          ! SA.d "M0 0h24v24H0z"
          ! SA.fill "none"
          $ text ""

mainView :: State -> HTML Event
mainView (State s) =
  case s.view of
    Routes.Home ->
      categoryList s.drawerOpened All s.recipes
    Routes.Login redirect ->
      mapEvent LoginEvent (Login.view s.api redirect s.login)
    Routes.Recipes filter' ->
      categoryList s.drawerOpened filter' s.recipes
    Routes.Recipe mode slug ->
      scrollContainer s.drawerOpened $ fromMaybe (text "") $ recipeMainView s.recipes mode slug

recipeMainView :: RecipesResponse -> Routes.AccessMode -> Slug -> Maybe (HTML Event)
recipeMainView (Success recipes) accessMode slug = do
  recipe <- getRecipe slug recipes
  pure $
    H.div ! HA.className "recipe-main-view" $ do
      RecipeEditor.view { recipe, accessMode }
      H.h2 $ text recipe.name
      H.div $ do
        H.h3 $ text "Ingredients"
        H.ul ! HA.className "ingredient-list" $ for_ recipe.ingredients $ ingredientView recipes
      H.div $ do
        H.h3 $ text "Directions"
        recipeDirections recipes recipe
recipeMainView Loading _ _ =
  Just recipePlaceholderView
recipeMainView (Failure err) _ _ =
  Just $
    H.div
      ! HA.className "error-message"
      $ text err
recipeMainView NotAsked _ _ =
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

ingredientView :: Map FoodId RecipeComponent -> IngredientAmount -> HTML Event
ingredientView recipes (IngredientAmount { ingredient, amount, unitType }) =
  case Map.lookup ingredient recipes of
    Just (IngredientComp _ { name }) ->
      H.li $ text
        (toString amount <> " " <> show unitType <> " " <> name)

    Just (RecipeComp _ { name }) ->
      H.li $ do
        text (toString amount <> " " <> show unitType <> " ")
        link (Routes.Recipe Routes.ReadMode $ slugify name)
          ! HA.className "ingredient-view__recipe-link"
          $ text name

    Nothing ->
      text ""

categoryList :: Boolean -> Filter -> RecipesResponse -> HTML Event
categoryList drawerOpened filter' (Success recipes) =
  H.div ! HA.className "category-list-background" $
    scrollContainer drawerOpened $
      H.div ! HA.className "category-list" $
        for_
          (groupRecipes (filterRecipes filter' recipes))
          (categoryView recipes)
categoryList _ _ (Failure err) =
  H.div
    ! HA.className "category-list-background"
    $ H.div ! HA.className "error-message" $ text err
categoryList _ _ Loading =
  H.div
    ! HA.className "category-list-background"
    $ H.div
      ! HA.className "loader"
      $ do
        Loader.view
        H.div
          ! HA.className "loader__message"
          $ text "Preparing Recipes..."
categoryList _ _ _ =
  H.div ! HA.className "category-list-background" $ text ""

categoryView :: Map FoodId RecipeComponent -> NonEmptyList (Tuple FoodId Recipe) -> HTML Event
categoryView recipeMap (NonEmptyList recipes) =
  H.div $ do
    let first = snd $ head recipes
    H.h2 $ text $ first.category
    H.div ! HA.className "recipe-grid" $ for_ recipes $ recipeView recipeMap <<< snd

recipeView :: Map FoodId RecipeComponent -> Recipe -> HTML Event
recipeView recipes recipe =
  link (Routes.Recipe Routes.ReadMode $ slugify recipe.name) ! HA.className "recipe-view-card-link" $
    H.div ! HA.className "recipe-view" $ do
      H.div ! HA.className "recipe-view__title" $ text recipe.name
      H.div ! HA.className "recipe-view__directions" $ text $ Markdown.strip recipe.directions
      H.div ! HA.className "recipe-view__cost" $ text $ formatCost $ getCost recipes recipe.ingredients

recipeDirections :: Map FoodId RecipeComponent -> Recipe -> HTML Event
recipeDirections recipes recipe =
  H.div ! HA.className "recipe-directions" $
    for_ (Markdown.parse recipe.directions) $
      markdownToHtml recipes recipe

markdownToHtml :: Map FoodId RecipeComponent -> Recipe -> Markdown -> HTML Event
markdownToHtml recipes recipe (Paragraph inlines) =
  H.p $ for_ inlines $ inlineToHtml recipes recipe

inlineToHtml :: Map FoodId RecipeComponent -> Recipe -> Inline -> HTML Event
inlineToHtml _ _ Space =
  text " "
inlineToHtml _ _ (Word str) =
  text str
inlineToHtml _ _ (Bold str) =
  H.b $ text str
inlineToHtml _ _ (Italics str) =
  H.em $ text str
inlineToHtml recipes recipe (Link label recipeId) =
  recipeLink recipes recipe.ingredients label recipeId
    # fromMaybe (text label)

recipeLink :: Map FoodId RecipeComponent -> List IngredientAmount -> String -> Int -> Maybe (HTML Event)
recipeLink recipes ingredients label id = do
  IngredientAmount { ingredient, amount, unitType } <- find ((==) (FoodId id) <<< _.ingredient <<< unwrap) ingredients
  recipeComp <- Map.lookup ingredient recipes
  let name = getRecipeName recipeComp
  pure $ mapEvent TooltipEvent $ Tooltip.label label (toString amount <> " " <> show unitType <> " " <> name)

listRecipes :: forall a. Ord a => (Recipe -> a) -> Map FoodId RecipeComponent -> List (Tuple FoodId Recipe)
listRecipes accessor recipes =
  recipes
    # Map.values
    # filterMap toRecipe
    # sortBy (compare `on` (accessor <<< snd))

groupRecipes :: Map FoodId RecipeComponent -> List (NonEmptyList (Tuple FoodId Recipe))
groupRecipes recipes =
  recipes
    # listRecipes _.category
    # groupBy ((==) `on` (_.category <<< snd))

filterRecipes :: Filter -> Map FoodId RecipeComponent -> Map FoodId RecipeComponent
filterRecipes All = id
filterRecipes (Search term) =
  Map.filter (contains (Pattern (toLower term)) <<< toLower <<< getRecipeName)

getCost :: Map FoodId RecipeComponent -> List IngredientAmount -> Number
getCost recipes =
  let convert from to ratio amount = fromMaybe 0.0 $ convertMeasurement from to ratio amount
  in
    foldl (\total (IngredientAmount { ingredient, amount, unitType: iaUnit }) ->
      case Map.lookup ingredient recipes of
        Just (IngredientComp _ { unitCost, unitType, cupsToLbs, amount: unitAmount }) ->
          total + convert iaUnit unitType cupsToLbs amount * unitCost / unitAmount
        Just (RecipeComp _ { ingredients, unitType, cupsToLbs, amount: unitAmount }) ->
          total + convert iaUnit unitType cupsToLbs amount * getCost recipes ingredients / unitAmount
        Nothing ->
          0.0
      ) 0.0

getUnitType :: RecipeComponent -> Measurement
getUnitType recipeComp =
  case recipeComp of
    RecipeComp _ { unitType } -> unitType
    IngredientComp _ { unitType } -> unitType

getRecipe :: Slug -> Map FoodId RecipeComponent -> Maybe Recipe
getRecipe slug recipes = do
  recipeComp <- find (eq slug <<< slugify <<< getRecipeName) recipes
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
