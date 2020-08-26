import React from 'react';
import {Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
          <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h5" className={classes.title}>
          <Link to="/about">About</Link>
          </Typography>
          <Typography variant="h5" className={classes.title}>
         <Link to="/movie">Movies</Link>
          </Typography>
          <Typography variant="h5" className={classes.title}>
          <Link to="/contact">Contact</Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
