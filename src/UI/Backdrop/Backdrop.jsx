/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) =>
  props.show ? (
    <div
      aria-hidden="true"
      className={classes.Backdrop}
      onClick={props.clickedBackdrop}
    />
  ) : null;

export default backdrop;
