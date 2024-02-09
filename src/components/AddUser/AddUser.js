import React from "react";
import classes from "./AddUser.module.css";

const AddUser = () => {
  return (
    <div className={classes.card}>
      <form>
        <div className={classes["input-group"]}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" />
        </div>
        <button type="submit" className={classes.addUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
