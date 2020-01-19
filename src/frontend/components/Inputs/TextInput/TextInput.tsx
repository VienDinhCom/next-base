import React from 'react';
import classes from './TextInput.module.css';

interface Props {}

function TextInput(props: Props) {
  return <p className={classes.root}>TextInput works!</p>;
}

TextInput.defaultProps = {};

export default TextInput;
