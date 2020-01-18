import React from 'react';
import classes from './About.module.css';

interface Props {}

function About(props: Props) {
  return <p className={classes.root}>About works!</p>;
}

About.defaultProps = {};

export default About;
