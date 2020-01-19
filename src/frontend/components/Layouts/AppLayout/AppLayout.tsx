import React from 'react';
import classes from './AppLayout.module.css';

interface Props {}

function AppLayout(props: Props) {
  return <p className={classes.root}>AppLayout works!</p>;
}

AppLayout.defaultProps = {};

export default AppLayout;
