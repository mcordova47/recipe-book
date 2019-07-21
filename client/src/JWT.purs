-- File auto generated by purescript-bridge! --
module JWT where

import Data.Lens (Iso', Lens', Prism', lens, prism')
import Data.Lens.Iso.Newtype (_Newtype)
import Data.Lens.Record (prop)
import Data.Maybe (Maybe(..))
import Data.Newtype (class Newtype)
import Data.Symbol (SProxy(SProxy))
import Prim (String)

import Prelude
import Data.Generic.Rep (class Generic)

newtype Token =
    Token {
      getToken :: String
    }

derive instance eqToken :: Eq Token
derive instance genericToken :: Generic Token _
derive instance newtypeToken :: Newtype Token _

--------------------------------------------------------------------------------
_Token :: Iso' Token { getToken :: String}
_Token = _Newtype

--------------------------------------------------------------------------------