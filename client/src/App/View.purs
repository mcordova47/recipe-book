module App.View where

import Prelude

import App.Events (Event(..))
import App.Filter (Filter(..))
import App.Loader as Loader
import App.Login as Login
import App.Markdown (Markdown(..), Inline(..))
import App.Markdown as Markdown
import App.RecipeEditor as RecipeEditor
import App.Routes (link)
import App.Routes as Routes
import App.State (RecipesResponse, State(..))
import App.Tooltip as Tooltip
import App.Util.Measurement (convertMeasurement, showMeasurement)
import CSS (CSS, Size, backgroundColor, borderRadius, height, margin, px, rgb, width)
import Data.Array (cons, filter, groupBy)
import Data.Foldable (foldl, for_)
import Data.Function (on)
import Data.List (find)
import Data.Maybe (Maybe(..), fromMaybe)
import Data.Newtype (unwrap)
import Data.NonEmpty (NonEmpty, (:|))
import Data.Number.Format (fixed, toString, toStringWith)
import Data.String (Pattern(..), contains, toLower)
import Data.Tuple (Tuple(Tuple))
import Network.RemoteData (RemoteData(..))
import Pux.DOM.Events as HE
import Pux.DOM.HTML (HTML, mapEvent)
import Pux.DOM.HTML.Attributes (style)
import Text.Smolder.HTML as H
import Text.Smolder.HTML.Attributes as HA
import Text.Smolder.Markup (text, (!), (#!))
import Text.Smolder.SVG as SVG
import Text.Smolder.SVG.Attributes as SA
import Types.Measurement (Measurement)
import Types.Recipe (FoodId(..), Ingredient(..), IngredientAmount(..), Recipe(..), RecipeComponent(..))
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
    for_ recipes (recipeNavLink route)
recipeNavList _ _ =
  text ""

recipeNavLink :: Routes.Route -> Recipe -> HTML Event
recipeNavLink route (Recipe recipe) =
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
  recipe@(Recipe { name, ingredients }) <- getRecipe slug recipes
  pure $
    H.div ! HA.className "recipe-main-view" $ do
      RecipeEditor.view { recipe, accessMode, onToggleEditMode: ToggleEditMode }
      H.h2 $ text name
      H.div $ do
        H.h3 $ text "Ingredients"
        H.ul ! HA.className "ingredient-list" $ for_ ingredients ingredientView
      H.div $ do
        H.h3 $ text "Directions"
        recipeDirections recipe
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

ingredientView :: IngredientAmount -> HTML Event
ingredientView (IngredientAmount { ingredient, amount, unitType }) =
  case ingredient of
    IngredientComp (Ingredient { name }) ->
      H.li $ text
        (toString amount <> " " <> showMeasurement unitType <> " " <> name)

    RecipeComp (Recipe { name }) ->
      H.li $ do
        text (toString amount <> " " <> showMeasurement unitType <> " ")
        link (Routes.Recipe Routes.ReadMode $ slugify name)
          ! HA.className "ingredient-view__recipe-link"
          $ text name

categoryList :: Boolean -> Filter -> RecipesResponse -> HTML Event
categoryList drawerOpened filter' (Success recipes) =
  H.div ! HA.className "category-list-background" $
    scrollContainer drawerOpened $
      H.div ! HA.className "category-list" $
        for_
          (groupRecipes (filterRecipes filter' recipes))
          categoryView
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

categoryView :: NonEmpty Array Recipe -> HTML Event
categoryView (recipe@(Recipe { category }) :| recipes) =
  H.div $ do
    H.h2 $ text $ category
    H.div ! HA.className "recipe-grid" $ for_ (cons recipe recipes) recipeView

recipeView :: Recipe -> HTML Event
recipeView (Recipe { name, directions, ingredients }) =
  link (Routes.Recipe Routes.ReadMode $ slugify name) ! HA.className "recipe-view-card-link" $
    H.div ! HA.className "recipe-view" $ do
      H.div ! HA.className "recipe-view__title" $ text name
      H.div ! HA.className "recipe-view__directions" $ text $ Markdown.strip directions
      H.div ! HA.className "recipe-view__cost" $ text $ formatCost $ getCost ingredients

recipeDirections :: Recipe -> HTML Event
recipeDirections recipe@(Recipe { directions }) =
  H.div ! HA.className "recipe-directions" $
    for_ (Markdown.parse directions) $
      markdownToHtml recipe

markdownToHtml :: Recipe -> Markdown -> HTML Event
markdownToHtml recipe (Paragraph inlines) =
  H.p $ for_ inlines $ inlineToHtml recipe

inlineToHtml :: Recipe -> Inline -> HTML Event
inlineToHtml _ Space =
  text " "
inlineToHtml _ (Word str) =
  text str
inlineToHtml _ (Bold str) =
  H.b $ text str
inlineToHtml _ (Italics str) =
  H.em $ text str
inlineToHtml (Recipe { ingredients }) (Link label recipeId) =
  recipeLink ingredients label recipeId
    # fromMaybe (text label)

recipeLink :: Array IngredientAmount -> String -> Int -> Maybe (HTML Event)
recipeLink ingredients label id = do
  IngredientAmount { ingredient, amount, unitType } <- find ((==) (FoodId id) <<< ingredientId <<< _.ingredient <<< unwrap) ingredients
  let name = getRecipeName ingredient
  pure $ mapEvent TooltipEvent $ Tooltip.label label (toString amount <> " " <> showMeasurement unitType <> " " <> name)
  where
    ingredientId = case _ of
      IngredientComp (Ingredient { id }) -> id
      RecipeComp (Recipe { id }) -> id

groupRecipes :: Array Recipe -> Array (NonEmpty Array Recipe)
groupRecipes =
  groupBy ((==) `on` (_.category <<< unwrap))

filterRecipes :: Filter -> Array Recipe -> Array Recipe
filterRecipes All = id
filterRecipes (Search term) =
  filter (contains (Pattern (toLower term)) <<< toLower <<< _.name <<< unwrap)

getCost :: Array IngredientAmount -> Number
getCost =
  foldl getIngredientCost 0.0
    where
      getIngredientCost total (IngredientAmount ia) =
        case ia.ingredient of
          IngredientComp (Ingredient { unitCost, unitType, cupsToLbs, amount }) ->
            total + convert ia.unitType unitType cupsToLbs ia.amount * unitCost / amount
          RecipeComp (Recipe { ingredients, unitType, cupsToLbs, amount }) ->
            total + convert ia.unitType unitType cupsToLbs ia.amount * getCost ingredients / amount
      convert from to ratio =
        fromMaybe 0.0 <<< convertMeasurement from to ratio

getUnitType :: RecipeComponent -> Measurement
getUnitType recipeComp =
  case recipeComp of
    RecipeComp (Recipe { unitType }) -> unitType
    IngredientComp (Ingredient { unitType }) -> unitType

getRecipe :: Slug -> Array Recipe -> Maybe Recipe
getRecipe slug = do
  find (eq slug <<< slugify <<< _.name <<< unwrap)

getRecipeName :: RecipeComponent -> String
getRecipeName recipeComp =
  case recipeComp of
    RecipeComp (Recipe { name }) -> name
    IngredientComp (Ingredient { name }) -> name

formatCost :: Number -> String
formatCost cost =
  "$" <> toStringWith (fixed 2) cost

toRecipe :: RecipeComponent -> Maybe (Tuple FoodId Recipe)
toRecipe (RecipeComp recipe@(Recipe { id })) = Just $ Tuple id recipe
toRecipe _ = Nothing

searchTerm :: Routes.Route -> String
searchTerm (Routes.Recipes (Search term)) = term
searchTerm _ = ""
