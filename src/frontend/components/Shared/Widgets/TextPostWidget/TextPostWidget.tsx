import React from 'react';
import classes from './TextPostWidget.module.css';

interface Props {}

function TextPostWidget(props: Props) {
  return <p className={classes.root}>TextPostWidget works!</p>;
}

TextPostWidget.defaultProps = {};

export default TextPostWidget;
