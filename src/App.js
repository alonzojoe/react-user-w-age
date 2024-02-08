import React from "react";
import AddUser from "./components/AddUser/AddUser";
import UserData from "./components/UsersData/UserData";

function App() {
  const users = [];

  return (
    <div>
      <AddUser />
      <UserData users={users} />
    </div>
  );
}

export default App;
