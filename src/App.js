import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserData from "./components/UsersData/UserData";
import Modal from "./components/Modal/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);
  const message = "Please enter a valid age";

  const handleClose = (state) => {
    setVisible(state);
  };

  const addUser = (user) => {
    const userDetails = {
      id: Math.random(),
      username: user.username,
      age: user.age,
    };
    setUsers([userDetails, ...users]);
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UserData users={users} />
      <Modal visible={visible} message={message} closeModal={handleClose} />
      <button
        style={{
          marginTop: "5px",
        }}
        onClick={() => setVisible(true)}
      >
        Show Modal
      </button>
    </div>
  );
}

export default App;
