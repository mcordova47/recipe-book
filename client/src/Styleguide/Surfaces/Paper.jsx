import React from 'react'
import PaperCore from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = overflow => makeStyles({
  root: {
    overflow,
  },
})

export const Paper = ({ overflow, ...props }) => {
  const classes = useStyles(overflow)()
  return <PaperCore classes={classes} {...props} />
}
