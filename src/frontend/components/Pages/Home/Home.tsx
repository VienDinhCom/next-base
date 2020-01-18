import React from 'react';
import classes from './Home.module.css';

interface Props {}

function Home(props: Props) {
  return <p className={classes.root}>Home works!</p>;
}

Home.defaultProps = {};

export default Home;
