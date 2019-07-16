import React from 'react'
import amber from '@material-ui/core/colors/amber'
import lightBlue from '@material-ui/core/colors/lightBlue'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: amber,
        secondary: lightBlue,
        link: '#1976D2',
    },
})

export const Theme = ({ children }) =>
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
