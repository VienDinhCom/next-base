import React from 'react';
import classes from './DateInput.module.css';

interface Props {}

function DateInput(props: Props) {
  return <p className={classes.root}>DateInput works!</p>;
}

DateInput.defaultProps = {};

export default DateInput;
