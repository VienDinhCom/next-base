import React from 'react';
import classes from './Shit.module.css';

interface Props {}

function Shit(props: Props) {
  return <p className={classes.root}>Shit works!</p>;
}

Shit.defaultProps = {};

export default Shit;
