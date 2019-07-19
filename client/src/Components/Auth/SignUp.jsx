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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const SignUp = ({ signInUrl, username, password, confirmPassword, onChangeUsername, onChangePassword, onChangeConfirmPassword }) =>
  <Theme>
    <SignUpBody
      signInUrl={signInUrl}
      username={username}
      password={password}
      confirmPassword={confirmPassword}
      onChangeUsername={onChangeUsername}
      onChangePassword={onChangePassword}
      onChangeConfirmPassword={onChangeConfirmPassword}
    />
  </Theme>

export const SignUpBody = ({ signInUrl, username, password, confirmPassword, onChangeUsername, onChangePassword, onChangeConfirmPassword }) => {
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                required
                fullWidth
                label="Username"
                name="username"
                value={username}
                onChange={e => onChangeUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={e => onChangePassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={e => onChangeConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href={signInUrl}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
