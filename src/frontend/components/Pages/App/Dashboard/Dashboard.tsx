import React from 'react';
import classes from './Dashboard.module.css';

interface Props {}

function Dashboard(props: Props) {
  return <p className={classes.root}>Dashboard works!</p>;
}

Dashboard.defaultProps = {};

export default Dashboard;
