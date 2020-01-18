import React from 'react';
import classes from './FbPageWidget.module.css';

interface Props {}

function FbPageWidget(props: Props) {
  return <p className={classes.root}>FbPageWidget works!</p>;
}

FbPageWidget.defaultProps = {};

export default FbPageWidget;
