import React from 'react';
import classes from './SignInForm.module.css';

interface Props {}

function SignInForm(props: Props) {
  return <p className={classes.root}>SignInForm works!</p>;
}

SignInForm.defaultProps = {};

export default SignInForm;
