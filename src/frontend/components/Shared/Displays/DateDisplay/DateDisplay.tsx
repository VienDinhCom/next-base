import React from 'react';
import classes from './DateDisplay.module.css';

interface Props {}

function DateDisplay(props: Props) {
  return <p className={classes.root}>DateDisplay works!</p>;
}

DateDisplay.defaultProps = {};

export default DateDisplay;
