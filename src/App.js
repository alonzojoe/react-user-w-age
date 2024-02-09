import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserData from "./components/UsersData/UserData";
import Modal from "./components/Modal/Modal";

const defaultModal = {
  visible: false,
  message: "",
};

function App() {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(defaultModal);

  const handleClose = () => {
    setModal(defaultModal);
  };

  const addUser = (user) => {
    const userDetails = {
      id: Math.random(),
      username: user.username,
      age: user.age,
    };
    setUsers([userDetails, ...users]);
  };

  const showErrors = (data) => {
    console.log(data);
    setModal({
      visible: data.visible,
      message: data.message,
    });
  };

  const handleDelete = (userId) => {
    const confirmation = "Are you sure to delete this?";
    if (window.confirm(confirmation) === true) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  return (
    <div>
      <AddUser onAddUser={addUser} onValidate={showErrors} />
      <UserData users={users} onDelete={handleDelete} />
      <Modal
        visible={modal.visible}
        message={modal.message}
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
