import React from 'react'
import PropTypes from 'prop-types'
import CoreAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export const AppBar = ({ children }) =>
  <CoreAppBar>
    <Toolbar>
      {children}
    </Toolbar>
  </CoreAppBar>

AppBar.propTypes = {
  children: PropTypes.node,
}
