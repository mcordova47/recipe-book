import React from 'react'
import PropTypes from 'prop-types'
import CoreLink from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.link,
  },
}))

export const Link = ({ href, children }) => {
  const className = useStyles().link
  return (
    <CoreLink
      href={href}
      variant="body2"
      className={className}
    >
      {children}
    </CoreLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
