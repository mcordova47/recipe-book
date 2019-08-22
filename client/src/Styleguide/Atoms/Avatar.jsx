import React from 'react'
import PropTypes from 'prop-types'
import CoreAvatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}))

export const Avatar = ({ children }) => {
  const className = useStyles().avatar
  return (
    <CoreAvatar className={className}>
      {children}
    </CoreAvatar>
  )
}

Avatar.propTypes = {
  children: PropTypes.node,
}
