import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const Paper = ({ children }) => {
  const className = useStyles().paper
  return (
    <div className={className}>
      {children}
    </div>
  )
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
}
