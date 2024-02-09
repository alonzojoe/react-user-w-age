import React from "react";
import classes from "./UserData.module.css";

const UserData = ({ users, onDelete }) => {
  console.log(users);
  return (
    <>
      {users.length > 0 && (
        <div className={classes.card}>
          {users.map((user) => (
            <div key={user.id} className={classes["input-group"]}>
              <input
                type="text"
                value={`${user.username} (${user.age} ${
                  user.age == 1 ? "year" : "years"
                } of old)`}
                readOnly
              />
              <span
                className={classes.deleteBtn}
                onClick={() => onDelete(user.id)}
              >
                <i class="bx bxs-x-circle"></i>
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserData;
