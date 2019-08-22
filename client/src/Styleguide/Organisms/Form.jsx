import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}))

export const Form = ({ children }) => {
  const className = useStyles().form
  return (
    <form className={className} noValidate>
      {children}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
}
