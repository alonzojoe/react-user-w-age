import React, { useState } from "react";
import classes from "./AddUser.module.css";

const defaultForm = {
  id: 0,
  username: "",
  age: "",
};

const AddUser = ({ onAddUser }) => {
  const [formData, setFormData] = useState(defaultForm);

  const submitForm = (event) => {
    event.preventDefault();
    onAddUser(formData);
    setFormData(defaultForm);
  };

  const inputHandler = (input, value) => {
    setFormData((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <div className={classes.card}>
      <form onSubmit={submitForm}>
        <div className={classes["input-group"]}>
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => inputHandler("username", e.target.value)}
            value={formData.username}
            type="text"
            id="username"
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={(e) => inputHandler("age", e.target.value)}
            value={formData.age}
            type="number"
            id="age"
          />
        </div>
        <button type="submit" className={classes.addUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
