import React from "react";
import classes from "./UserData.module.css";

const UserData = ({ users }) => {
  console.log(users);
  return (
    <>
      {users.length > 0 && (
        <div className={classes.card}>
          {users.map((user) => (
            <div className={classes["input-group"]}>
              <input
                type="text"
                value={`${user.username} (${user.age} ${
                  user.age == 1 ? "year" : "years"
                } of old)`}
                readOnly
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserData;
