import React from 'react';
import classes from './VideoPost.module.css';

interface Props {}

function VideoPost(props: Props) {
  return <p className={classes.root}>VideoPost works!</p>;
}

VideoPost.defaultProps = {};

export default VideoPost;
