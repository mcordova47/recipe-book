import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

import { Avatar } from '/src/Styleguide/Atoms/Avatar.jsx'

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 4.5,
  },
}))

export const AvatarProgress = ({ children, loading }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Avatar>{children}</Avatar>
      {loading && <CircularProgress className={classes.progress} size={47} />}
    </div>
  )
}
