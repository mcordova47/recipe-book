import React from 'react'
import PropTypes from 'prop-types'
import CoreCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions';

export const Card = ({ content, actions }) =>
  <CoreCard>
    <CardContent>
      {content}
    </CardContent>
    {actions && (
      <CardActions>
        {actions}
      </CardActions>
    )}
  </CoreCard>

Card.propTypes = {
  content: PropTypes.node.isRequired,
  actions: PropTypes.node,
}
