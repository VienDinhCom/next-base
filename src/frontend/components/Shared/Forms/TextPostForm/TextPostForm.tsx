import React from 'react';
import classes from './TextPostForm.module.css';

interface Props {}

function TextPostForm(props: Props) {
  return <p className={classes.root}>TextPostForm works!</p>;
}

TextPostForm.defaultProps = {};

export default TextPostForm;
