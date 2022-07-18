// Nombre (“first_name”).
// Apellido (“last_name”).
// Email (“email”).
// Contraseña (“password”).
// Fecha de nacimiento (“birthday”).
import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersForm = ({ getUsers, userSelected, deselectUsers}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      alert("cambio");
          setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
           setEmail(userSelected.email);
            setPassword(userSelected.password);
           setDate(userSelected.birthday);

    }
  }, [userSelected ]);

  const upload = (e) => {
    e.preventDefault();
    alert("Hice submit");

    const newUser = {
      birthday: date,
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
    };

    
    if (userSelected !== null) {
      axios
        .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, newUser)

        .then(() => {
          getUsers();
          reset();
          deselectUsers();
        });
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", newUser)

        .then(() => {
          getUsers();
          reset();
        })
        .catch((error) => console.log(error.response));
    }

    // console.log(newUser);
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setDate("");
  };

  return (
    <div className="container_form">
      <div className="form">
        <h1>New User</h1>
        <form onSubmit={upload} action="">
          <input
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="date"
            placeholder="mm/dd/aaa"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button className="button_form">upload</button>
        </form>
      </div>
    </div>
  );
};

export default UsersForm;
