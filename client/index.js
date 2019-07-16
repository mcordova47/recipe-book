import "react"
import { main } from "./output/bundle"

// HMR stuff
// For more info see: https://parceljs.org/hmr.html
if (module.hot) {
    module.hot.accept(function () {
      console.log('Reloaded, running main again')
      main()
    })
  }
  
  console.log('Starting app')
main()
