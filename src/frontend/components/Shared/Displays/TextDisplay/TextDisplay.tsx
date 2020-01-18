import React from 'react';
import classes from './TextDisplay.module.css';

interface Props {}

function TextDisplay(props: Props) {
  return <p className={classes.root}>TextDisplay works!</p>;
}

TextDisplay.defaultProps = {};

export default TextDisplay;
