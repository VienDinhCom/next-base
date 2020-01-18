import React from 'react';
import classes from './SignIn.module.css';

interface Props {}

function SignIn(props: Props) {
  return <p className={classes.root}>SignIn works!</p>;
}

SignIn.defaultProps = {};

export default SignIn;
