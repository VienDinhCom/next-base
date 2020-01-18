import React from 'react';
import classes from './PostCard.module.css';

interface Props {}

function PostCard(props: Props) {
  return <p className={classes.root}>PostCard works!</p>;
}

PostCard.defaultProps = {};

export default PostCard;
