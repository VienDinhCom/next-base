import React from 'react';
import classes from './HomeLayout.module.css';

interface Props {}

function HomeLayout(props: Props) {
  return <p className={classes.root}>HomeLayout works!</p>;
}

HomeLayout.defaultProps = {};

export default HomeLayout;
