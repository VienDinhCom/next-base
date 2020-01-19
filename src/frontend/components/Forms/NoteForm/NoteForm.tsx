import React from 'react';
import classes from './NoteForm.module.css';

interface Props {}

function NoteForm(props: Props) {
  return <p className={classes.root}>NoteForm works!</p>;
}

NoteForm.defaultProps = {};

export default NoteForm;
