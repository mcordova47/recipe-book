import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

export const Input = ({ margin, required, fullWidth, label, name, autoComplete, autoFocus, type, value, onChange }) =>
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
    value={value}
    onChange={e => onChange(e.target.value)}
  />

Input.propTypes = {
  margin: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
