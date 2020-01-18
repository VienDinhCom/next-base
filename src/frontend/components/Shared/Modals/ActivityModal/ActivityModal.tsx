import React from 'react';
import classes from './ActivityModal.module.css';

interface Props {}

function ActivityModal(props: Props) {
  return <p className={classes.root}>ActivityModal works!</p>;
}

ActivityModal.defaultProps = {};

export default ActivityModal;
