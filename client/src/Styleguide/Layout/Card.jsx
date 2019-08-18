import React from 'react'
import PropTypes from 'prop-types'
import CoreCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'

export const Card = ({ content, actions, onClick, raised }) =>
  <CoreCard raised={raised}>
    {onClick
      ? (
        <CardActionArea onClick={onClick}>
          <CardContent>
            {content}
          </CardContent>
        </CardActionArea>
      )
      : (
        <CardContent>
          {content}
        </CardContent>
      )}
    {actions && (
      <CardActions>
        {actions}
      </CardActions>
    )}
  </CoreCard>

Card.propTypes = {
  content: PropTypes.node.isRequired,
  actions: PropTypes.node,
  onClick: PropTypes.func,
  raised: PropTypes.bool,
}
