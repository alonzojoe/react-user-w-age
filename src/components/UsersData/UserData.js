import React from "react";
import classes from "./UserData.module.css";

const UserData = ({ users }) => {
  return (
    <>
      {users.length > 0 && (
        <div className={classes.card}>
          <div className={classes["input-group"]}>
            <input type="text" />
          </div>
        </div>
      )}
    </>
  );
};

export default UserData;
