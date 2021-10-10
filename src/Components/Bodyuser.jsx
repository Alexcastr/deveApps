import React, { useState } from "react";
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
  const [filteringId, setFilteringId] = useState(false);
  const [filteringName, setFilteringName] = useState(false);
  return (
    <body className="center-content mt-1">
      <div className="table">
        <table className="ml-auto mr-auto">
          <thead>
            <tr>
              <th>
                {!filteringId ? (
                  <>
                    ID
                    <button
                      onClick={() => {
                        setFilteringId(true);
                      }}
                      className="tableSearch"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <input type="number" min="1" placeholder="Id del usuario" />
                    <button
                      onClick={() => setFilteringId(false)}
                      className="tableSearch"
                    >
                      <i className="bi bi-x-circle-fill"></i>
                    </button>
                  </>
                )}
              </th>
              <th>
                {!filteringName ? (
                  <>
                    Nombre
                    <button
                      onClick={() => {
                        setFilteringName(true);
                      }}
                      className="tableSearch"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <input type="text" min="1" placeholder="Nombre del usuario" />
                    <button
                      onClick={() => setFilteringName(false)}
                      className="tableSearch"
                    >
                      <i className="bi bi-x-circle-fill"></i>
                    </button>
                  </>
                )}
              </th>
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
