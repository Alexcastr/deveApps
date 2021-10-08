import React from "react";
import User from "./User";
const usuarios = [
  {
    id: 2001,
    name: "Pedro Martinez",
    state: "Autorizado",
    rol: "Administrador",
  },
];
const Bodyuser = () => {
  return (
    <body className="center-content mt-1">
      <div className="table">
        <table className="ml-auto mr-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((item) => {
              return (
                <User
                  id={item.id}
                  name={item.name}
                  state={item.state}
                  rol={item.rol}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </body>
  );
};

export default Bodyuser;
