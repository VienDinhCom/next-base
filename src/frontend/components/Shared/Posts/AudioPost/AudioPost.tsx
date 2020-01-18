import React from 'react';
import classes from './AudioPost.module.css';

interface Props {}

function AudioPost(props: Props) {
  return <p className={classes.root}>AudioPost works!</p>;
}

AudioPost.defaultProps = {};

export default AudioPost;
