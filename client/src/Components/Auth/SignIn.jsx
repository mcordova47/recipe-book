import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { Button } from '/src/Styleguide/Atoms/Button'
import { Input } from '/src/Styleguide/Atoms/Input'
import { Link } from '/src/Styleguide/Atoms/Link'
import { Theme } from '/src/Styleguide/Theme'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const SignIn = ({ signUpUrl }) =>
  <Theme>
    <SignInBody signUpUrl={signUpUrl} />
  </Theme>

export const SignInBody = ({ signUpUrl }) => {
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Input
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoFocus
          />
          <Input
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href={signUpUrl}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
