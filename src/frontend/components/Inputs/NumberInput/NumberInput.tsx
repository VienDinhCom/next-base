import React from 'react';
import classes from './NumberInput.module.css';

interface Props {}

function NumberInput(props: Props) {
  return <p className={classes.root}>NumberInput works!</p>;
}

NumberInput.defaultProps = {};

export default NumberInput;
