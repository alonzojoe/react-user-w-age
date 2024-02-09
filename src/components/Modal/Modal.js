import React from "react";
import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-body"]}>
        <h3>Invalid Input</h3>
        <div className={classes.content}>
          <p>Please enter a valid age</p>
          <div className={classes.control}>
            <button className={classes.closeBtn}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
