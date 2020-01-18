import React from 'react';
import classes from './LessonList.module.css';

interface Props {}

function LessonList(props: Props) {
  return <p className={classes.root}>LessonList works!</p>;
}

LessonList.defaultProps = {};

export default LessonList;
