import React from 'react';
import classes from './TextPost.module.css';

interface Props {}

function TextPost(props: Props) {
  return <p className={classes.root}>TextPost works!</p>;
}

TextPost.defaultProps = {};

export default TextPost;
