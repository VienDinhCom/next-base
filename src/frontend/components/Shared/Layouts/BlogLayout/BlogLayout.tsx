import React from 'react';
import classes from './BlogLayout.module.css';

interface Props {}

function BlogLayout(props: Props) {
  return <p className={classes.root}>BlogLayout works!</p>;
}

BlogLayout.defaultProps = {};

export default BlogLayout;
