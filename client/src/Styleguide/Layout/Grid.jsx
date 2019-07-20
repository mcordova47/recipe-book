import React from 'react'
import PropTypes from 'prop-types'
import CoreGrid from '@material-ui/core/Grid'

export const Grid = ({ justify, children }) =>
  <CoreGrid container justify={justify}>
    {children}
  </CoreGrid>

Grid.propTypes = {
  justify: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export const GridItem = ({ justify, children }) =>
  <CoreGrid item justify={justify}>
    {children}
  </CoreGrid>

GridItem.propTypes = {
  justify: PropTypes.string,
  children: PropTypes.node.isRequired,
}
