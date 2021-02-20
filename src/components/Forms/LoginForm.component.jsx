import React, { useState } from 'react';
import {
    Avatar,
    Button,
    Container,
    CssBaseline,
    Typography,
    TextField,
} from '@material-ui/core';
import {
    AccountBox,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import { userDatabase } from './UserDatabaseDummy'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.dark,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    }));

const LoginForm = ({ setIsLoggedIn, setUserData }) => {
    const classes = useStyles();

    const [emailField, setEmailField] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isError, setIsError] = useState(false)

    const handleEmailChange = (event) => {
      setEmailField(event.target.value);
      setEmailError('');
      setIsError(false);
    }

    const handlePasswordChange = (event) => {
      setPasswordField(event.target.value);
      setPasswordError('');
      setIsError(false);
    }

    const filteredUser = userDatabase.filter(data => {
      return data.email === emailField
    })
    
    const passMatch = userDatabase.filter(data => {
      return data.password === passwordField
    })

    const validate = (e) => {
      e.preventDefault();

      if(!emailField.includes('@')) {
        setEmailError('Invalid Email');
        setIsError(true);
      } else if(filteredUser.length < 1) {
        setEmailError('The Email address is not registered')
        setIsError(true)
      }

      if(passwordField.length < 8) {
        setPasswordError('Password need to be at least 8 characters');
        setIsError(true);
      } else if(passMatch.length < 1) {
        setPasswordError('Wrong Password')
        setIsError(true)
      }

      if(filteredUser.length > 0 && passMatch.length > 0) {
        setIsLoggedIn(true)
        setUserData({...filteredUser})
      }
    }

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBox />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e) => validate(e)}>
          <TextField
            error={emailError?true:false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            onChange={(event) => handleEmailChange(event)}
            helperText={emailError}
          />
          <TextField
            error={passwordError?true:false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(event) => handlePasswordChange(event)}
            helperText={passwordError}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isError?true:false}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
    )
}

export default LoginForm
