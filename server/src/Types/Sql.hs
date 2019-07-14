module Types.Sql (HasSqlPool(..)) where

import Data.Pool (Pool)
import Database.Esqueleto (SqlBackend)

class HasSqlPool a where
    sqlPool :: a -> Pool SqlBackend
