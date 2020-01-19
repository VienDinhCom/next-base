import React from 'react';
import classes from './NoteList.module.css';

interface Props {}

function NoteList(props: Props) {
  return <p className={classes.root}>NoteList works!</p>;
}

NoteList.defaultProps = {};

export default NoteList;
