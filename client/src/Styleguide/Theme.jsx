import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
// import amber from '@material-ui/core/colors/amber'
// import lightBlue from '@material-ui/core/colors/lightBlue'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    // primary: amber,
    // secondary: lightBlue,
    link: '#1976D2',
  },
})

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
}))

export const Theme = ({ children }) =>
  <ThemeProvider theme={theme}>
    <Body>
      {children}
    </Body>
  </ThemeProvider>

const Body = ({ children }) => {
  useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
    </React.Fragment>
  )
}
