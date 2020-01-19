import React from 'react';
import classes from './LoginForm.module.css';

interface Props {}

function LoginForm(props: Props) {
  return <p className={classes.root}>LoginForm works!</p>;
}

LoginForm.defaultProps = {};

export default LoginForm;
