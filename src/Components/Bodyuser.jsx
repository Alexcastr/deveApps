import React from "react";

const Bodyuser = () => {
  return (
      <body className="center-content mt-1">
        <div className="table">
          <table className="ml-auto mr-auto">
            <tr className="head-body">
              <th>ID</th>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Rol</th>
            </tr>
            <tr class="fila_impar">
              <td>1123</td>
              <td>Pedro</td>
              <td>
              <select>
                  <option>Pendiente</option>
                  <option>Autorizado</option>
                  <option>No Autorizado</option>
                </select>
              </td>
              <td>
                {" "}
                <div class="btn-group">
                <select>
                  <option>Administrador</option>
                  <option>Vendedor</option>
                </select>
                  <div class="dropdown-menu"></div>
                </div>
              </td>
            </tr>
            <tr class="fila_resaltada">
              <td>2025</td>
              <td>Paula</td>
              <td>
              <select>
                  <option>Pendiente</option>
                  <option>Autorizado</option>
                  <option>No Autorizado</option>
                </select>
              </td>
              <td>
                {" "}
                <div class="btn-group">
                <select>
                  <option>Administrador</option>
                  <option>Vendedor</option>
                </select>
                  <div class="dropdown-menu"></div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </body>
  );
};

export default Bodyuser;
