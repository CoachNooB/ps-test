import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Container,
    Toolbar, 
    Typography,
    Button,
} from '@material-ui/core/';
import { PowerSettingsNewOutlined } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar({setIsLoggedIn, setUserData}) {
  const classes = useStyles();

  const doLogout = () => {
    setIsLoggedIn(false)
    setUserData({})
  }

  return (
    <div className={classes.root}>
      <AppBar color='primary' position='static'>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Profile
                </Typography>
                <Button onClick={() => doLogout()} color="inherit"><PowerSettingsNewOutlined className={classes.menuButton} />Logout</Button>
            </Toolbar>
      </AppBar>
    </div>
  );
}
