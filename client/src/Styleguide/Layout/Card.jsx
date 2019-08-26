import React from 'react'
import PropTypes from 'prop-types'
import CoreCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import { withTheme } from '@material-ui/styles'

export const Card = ({ content, actions, onClick, raised, image, imageTitle, imagePlaceholder, imageHeight }) =>
  <CoreCard raised={raised}>
    {onClick
      ? (
        <CardActionArea onClick={onClick}>
          <CardImage
            image={image}
            title={imageTitle}
            placeholder={imagePlaceholder}
            height={imageHeight}
          />
          <CardContent>
            {content}
          </CardContent>
        </CardActionArea>
      )
      : (
        <React.Fragment>
          <CardImage
            image={image}
            title={imageTitle}
            placeholder={imagePlaceholder}
            height={imageHeight}
          />
          <CardContent>
            {content}
          </CardContent>
        </React.Fragment>
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
  image: PropTypes.string,
  imageTitle: PropTypes.string,
  imagePlaceholder: PropTypes.node,
  imageHeight: PropTypes.number,
}

export const CardImage = ({ image, title, placeholder, height, onMouseEnter, onMouseLeave }) =>
  image
    ? (
      <CardMedia
        image={image}
        title={title}
        style={{ height }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    ) : placeholder ? (
      <ThemedImagePlaceholder height={height} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {placeholder}
      </ThemedImagePlaceholder>
    ) : null

const ImagePlaceholder = ({ children, theme, height, onMouseEnter, onMouseLeave }) =>
  <div
    style={{
      height,
      backgroundColor: theme.palette.grey['300'],
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>

const ThemedImagePlaceholder = withTheme(ImagePlaceholder)