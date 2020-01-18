import React from 'react';
import classes from './Contact.module.css';

interface Props {}

function Contact(props: Props) {
  return <p className={classes.root}>Contact works!</p>;
}

Contact.defaultProps = {};

export default Contact;
