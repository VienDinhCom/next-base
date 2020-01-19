import React from 'react';
import classes from './NoteCreate.module.css';

interface Props {}

function NoteCreate(props: Props) {
  return <p className={classes.root}>NoteCreate works!</p>;
}

NoteCreate.defaultProps = {};

export default NoteCreate;
