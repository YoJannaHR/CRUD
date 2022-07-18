// listar todos los usuarios, mostrando su nombre, apellido, email
//  y fecha de nacimiento. Adicionalmente colocarás dos botones,
//   uno para eliminar, el cuál ejecutará un “delete”
// en la API para eliminar el usuario seleccionado.
// . Y uno para editar, el cuál pondrá toda la información del usuario seleccionado en “UsersForm”.

import React from "react";

const UsersList = ({ users,selectUsers, deleteUsers }) => {
  return (
    <div className="container_card">
      {users.map((user) => (
        <div className="card" key = {user.id}>
          <div className="data">
            <h4>{user.first_name}</h4>
            <h4>{user.last_name}</h4>
            <h4>{user.birthday}</h4>
          </div>
      
          <div className="button">
            <button onClick={()=>selectUsers(user)} >
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button onClick={()=>deleteUsers(user.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
