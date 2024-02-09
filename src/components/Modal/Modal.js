import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ visible, message, onClose }) => {
  return (
    <>
      {visible == true && (
        <div className={classes.modal}>
          <div className={classes["modal-body"]}>
            <h3>Invalid Input</h3>
            <div className={classes.content}>
              <p>{message}</p>
              <div className={classes.control}>
                <button onClick={() => onClose()} className={classes.closeBtn}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
