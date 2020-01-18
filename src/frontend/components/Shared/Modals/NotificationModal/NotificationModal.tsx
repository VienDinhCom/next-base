import React from 'react';
import classes from './NotificationModal.module.css';

interface Props {}

function NotificationModal(props: Props) {
  return <p className={classes.root}>NotificationModal works!</p>;
}

NotificationModal.defaultProps = {};

export default NotificationModal;
