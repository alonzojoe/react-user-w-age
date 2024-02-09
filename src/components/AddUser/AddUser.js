import React, { useState } from "react";
import classes from "./AddUser.module.css";

const defaultForm = {
  id: 0,
  username: "",
  age: "",
};

const AddUser = ({ onAddUser, onValidate }) => {
  const [formData, setFormData] = useState(defaultForm);
  const [validate, setValidate] = useState(false);
  const validateForm = () => {
    let errorMessage;
    if (
      formData.username.trim().length === 0 ||
      formData.age.trim().length === 0
    ) {
      errorMessage = "Please enter a valid name and age (non-empty values).";
      setValidate(true);
      onValidate({ visible: true, message: errorMessage });
      return false;
    } else if (formData.age < 0) {
      errorMessage = "Please enter a valid age(>0)";
      setValidate(true);
      onValidate({ visible: true, message: errorMessage });
      return false;
    }
    return true;
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
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
    setValidate(false);
  };

  return (
    <div className={classes.card}>
      <form onSubmit={submitForm}>
        <div
          className={`${classes["input-group"]} ${
            validate && classes["invalid"]
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => inputHandler("username", e.target.value)}
            value={formData.username}
            type="text"
            id="username"
          />
        </div>
        <div
          className={`${classes["input-group"]} ${
            validate && classes["invalid"]
          }`}
        >
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={(e) => inputHandler("age", e.target.value)}
            value={formData.age}
            type="number"
            id="age"
          />
        </div>
        <button type="submit" className={classes.addUser}>
          <i className="bx bxs-user-plus" style={{ fontSize: "1.3rem" }}></i>{" "}
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
