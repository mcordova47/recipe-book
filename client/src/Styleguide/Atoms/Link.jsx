import React from 'react'
import PropTypes from 'prop-types'
import CoreLink from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.link,
  },
}))

export const Link = ({ href, className, children }) => {
  const classes = useStyles()
  return (
    <CoreLink
      href={href}
      variant="body2"
      className={`${classes.link} ${className}`}
    >
      {children}
    </CoreLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
