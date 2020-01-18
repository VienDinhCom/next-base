import React from 'react';
import classes from './ProjectCard.module.css';

interface Props {}

function ProjectCard(props: Props) {
  return <p className={classes.root}>ProjectCard works!</p>;
}

ProjectCard.defaultProps = {};

export default ProjectCard;
