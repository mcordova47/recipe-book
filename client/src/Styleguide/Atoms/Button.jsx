import React from 'react'
import PropTypes from 'prop-types'
import CoreButton from '@material-ui/core/Button'

export const Button = ({ type, fullWidth, color, className, children }) =>
  <CoreButton
    type={type}
    fullWidth={fullWidth}
    variant="contained"
    color={color}
    className={className}
  >
    {children}
  </CoreButton>

Button.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
