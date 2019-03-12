module App.State where



import App.Login as Login


import App.Routes as Routes
import App.Tooltip as Tooltip
import Types.Recipe (Recipe)

import Data.Maybe (Maybe(..))
import Data.Newtype (class Newtype)
import Network.RemoteData (RemoteData(..))

type RecipesResponse = RemoteData String (Array Recipe)

newtype State = State
  { recipes :: RecipesResponse
  , view :: Routes.Route
  , tooltip :: Tooltip.State
  , drawerOpened :: Boolean
  , login :: Login.State
  , auth :: Maybe String
  , api :: String
  }
derive instance newtypeState :: Newtype State _

init :: State
init = State
  { recipes: NotAsked
  , view: Routes.Home
  , tooltip: Tooltip.init
  , drawerOpened: false
  , login: Login.init
  , auth: Nothing
  , api: ""
  }
