import React from 'react';
import classes from './SideModal.module.css';

interface Props {}

function SideModal(props: Props) {
  return <p className={classes.root}>SideModal works!</p>;
}

SideModal.defaultProps = {};

export default SideModal;
