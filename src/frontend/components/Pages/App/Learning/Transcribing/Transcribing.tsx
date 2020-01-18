import React from 'react';
import classes from './Transcribing.module.css';

interface Props {}

function Transcribing(props: Props) {
  return <p className={classes.root}>Transcribing works!</p>;
}

Transcribing.defaultProps = {};

export default Transcribing;
