import React from 'react';
import classes from './LessonDetail.module.css';

interface Props {}

function LessonDetail(props: Props) {
  return <p className={classes.root}>LessonDetail works!</p>;
}

LessonDetail.defaultProps = {};

export default LessonDetail;
