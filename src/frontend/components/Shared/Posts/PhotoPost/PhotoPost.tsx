import React from 'react';
import classes from './PhotoPost.module.css';

interface Props {}

function PhotoPost(props: Props) {
  return <p className={classes.root}>PhotoPost works!</p>;
}

PhotoPost.defaultProps = {};

export default PhotoPost;
