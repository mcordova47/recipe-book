module App.Loader (view) where

import Prelude

import Pux.DOM.HTML (HTML)
import Text.Smolder.Markup (text, (!))
import Text.Smolder.SVG as SVG
import Text.Smolder.SVG.Attributes as SA

view :: forall ev. HTML ev
view =
  SVG.svg
    ! SA.width "500"
    ! SA.height "200"
    ! SA.viewBox "0 0 500 200"
    $ SVG.g
      ! SA.stroke "#424242"
      ! SA.strokeWidth "11"
      ! SA.strokeLinecap "round"
      ! SA.fill "none"
      $ do
        SVG.line ! SA.x1 "75" ! SA.y1 "100" ! SA.x2 "375" ! SA.y2 "100"
        SVG.line ! SA.x1 "75" ! SA.y1 "100" ! SA.x2 "125" ! SA.y2 "175"
        SVG.line ! SA.x1 "125" ! SA.y1 "175" ! SA.x2 "325" ! SA.y2 "175"
        SVG.line ! SA.x1 "392" ! SA.y1 "75" ! SA.x2 "325" ! SA.y2 "175"
        SVG.line ! SA.x1 "392" ! SA.y1 "75" ! SA.x2 "495" ! SA.y2 "75"
        SVG.g
          ! SA.stroke "#969696"
          ! SA.strokeWidth "8"
          $ do
            SVG.path
              ! SA.class_ "loader__smoke-1"
              ! SA.d "M170 75 A25 25 0 0 0 170 50 A25 25 0 0 1 170 30"
              $ text ""
            SVG.path
              ! SA.class_ "loader__smoke-2"
              ! SA.d "M220 55 A25 25 0 0 0 220 30 A25 25 0 0 1 220 10"
              $ text ""
            SVG.path
              ! SA.class_ "loader__smoke-3"
              ! SA.d "M270 75 A25 25 0 0 0 270 50 A25 25 0 0 1 270 30"
              $ text ""
