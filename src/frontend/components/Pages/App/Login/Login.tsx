import React from 'react';
import classes from './Login.module.css';

interface Props {}

function Login(props: Props) {
  return <p className={classes.root}>Login works!</p>;
}

Login.defaultProps = {};

export default Login;
