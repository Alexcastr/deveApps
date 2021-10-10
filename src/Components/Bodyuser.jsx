import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { getUsers } from "utils/apiUsers";
import User from "./User";
import { ToastContainer, toast } from "react-toastify";

const Bodyuser = () => {
  const [filteringId, setFilteringId] = useState(false);
  const [filteringName, setFilteringName] = useState(false);
  const [users, setUsers] = useState([]);
  const [executeQuery, setExecuteQuery] = useState(true);

  useEffect(() => {
    if (executeQuery) {
      getUsers(setUsers, setExecuteQuery);
    }
  }, [executeQuery]);

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
                    <input
                      type="text"
                      min="1"
                      placeholder="Nombre del usuario"
                    />
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
            {users.map((user) => {
              return (
                <User
                  key={nanoid}
                  user = {user}
                  setExecuteQuery={setExecuteQuery}
                />
              );
            })}
          </tbody>
        </table>
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </body>
  );
};

export default Bodyuser;
