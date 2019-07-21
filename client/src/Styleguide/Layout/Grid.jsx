import React from 'react'
import PropTypes from 'prop-types'
import CoreGrid from '@material-ui/core/Grid'

export const Grid = (props) =>
  <CoreGrid container {...props} />

Grid.propTypes = CoreGrid.propTypes

export const GridItem = (props) =>
  <CoreGrid item {...props} />

GridItem.propTypes = CoreGrid.propTypes
