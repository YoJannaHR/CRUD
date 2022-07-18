import { useEffect, useState } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  };

  const selectUsers = (Registration) => {
    setUserSelected(Registration);
  };

  const deleteUsers = (id) => {
    alert(id);
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  const deselectUsers = () => setUserSelected(null);

  console.log(users);

  return (
    <div className="App">
      <UsersList
        users={users}
        selectUsers={selectUsers}
        deleteUsers={deleteUsers}
      />
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUsers={deselectUsers}
      />
    </div>
  );
}

export default App;
