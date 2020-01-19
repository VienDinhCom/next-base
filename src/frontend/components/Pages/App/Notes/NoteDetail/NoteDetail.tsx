import React from 'react';
import classes from './NoteDetail.module.css';

interface Props {}

function NoteDetail(props: Props) {
  return <p className={classes.root}>NoteDetail works!</p>;
}

NoteDetail.defaultProps = {};

export default NoteDetail;
