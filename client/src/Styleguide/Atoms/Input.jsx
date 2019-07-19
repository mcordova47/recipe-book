import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

export const Input = ({ margin, required, fullWidth, label, name, autoComplete, autoFocus, type }) =>
  <TextField
    variant="outlined"
    margin={margin}
    required={required}
    fullWidth={fullWidth}
    label={label}
    name={name}
    autoComplete={autoComplete || name}
    autoFocus={autoFocus}
    type={type}
  />

Input.propTypes = {
  margin: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  type: PropTypes.string
}
