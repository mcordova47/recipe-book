import React from 'react'
import PropTypes from 'prop-types'
import CoreButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = (margin) => makeStyles(theme => ({
  button: {
    margin: theme.spacing(...margin),
  },
}))()

export const Button = ({ fullWidth, color, margin, onClick, size, variant, children }) => {
  const className = margin ? useStyles(margin).button : undefined
  return (
    <CoreButton
      type="button"
      fullWidth={fullWidth}
      variant="contained"
      color={color}
      className={className}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      {children}
    </CoreButton>
  )
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
  margin: PropTypes.arrayOf(PropTypes.number),
  size: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
}
