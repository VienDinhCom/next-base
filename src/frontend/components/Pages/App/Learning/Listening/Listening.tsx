import React from 'react';
import classes from './Listening.module.css';

interface Props {}

function Listening(props: Props) {
  return <p className={classes.root}>Listening works!</p>;
}

Listening.defaultProps = {};

export default Listening;
