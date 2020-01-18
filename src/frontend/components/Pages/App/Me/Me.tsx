import React from 'react';
import classes from './Me.module.css';

interface Props {}

function Me(props: Props) {
  return <p className={classes.root}>Me works!</p>;
}

Me.defaultProps = {};

export default Me;
