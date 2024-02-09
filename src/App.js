import React from "react";
import AddUser from "./components/AddUser/AddUser";
import UserData from "./components/UsersData/UserData";
import Modal from "./components/Modal/Modal";

function App() {
  const users = [];

  return (
    <div>
      <AddUser />
      <UserData users={users} />
      <Modal />
    </div>
  );
}

export default App;
