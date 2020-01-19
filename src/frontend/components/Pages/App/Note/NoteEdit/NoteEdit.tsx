import React from 'react';
import classes from './NoteEdit.module.css';

interface Props {}

function NoteEdit(props: Props) {
  return <p className={classes.root}>NoteEdit works!</p>;
}

NoteEdit.defaultProps = {};

export default NoteEdit;
