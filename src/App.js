import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers((prevuser) => {
      return [
        { name: user.name, age: user.age, id: Math.random().toString() },
        ...prevuser,
      ];
    });
  };
  return (
    <div>
      <AddUser OnAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
