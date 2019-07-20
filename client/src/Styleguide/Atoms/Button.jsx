import React from 'react'
import PropTypes from 'prop-types'
import CoreButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = (margin) => makeStyles(theme => ({
  button: {
    margin: theme.spacing(...margin),
  },
}))()

export const Button = ({ fullWidth, color, margin, onClick, children }) => {
  const className = margin ? useStyles(margin).button : undefined
  return (
    <CoreButton
      type="button"
      fullWidth={fullWidth}
      variant="contained"
      color={color}
      className={className}
      onClick={onClick}
    >
      {children}
    </CoreButton>
  )
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
  margin: PropTypes.arrayOf(PropTypes.number),
  children: PropTypes.node.isRequired,
}
