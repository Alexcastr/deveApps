import { Link } from "react-router-dom";

const Bodyproduct = () => {
  return (
    <body className="center-content mt-1">
      <div className="table">
        <table className="ml-auto mr-auto">
          <tr className="head-body">
            <th>ID</th>
            <th>Nombre</th>
            <th>Valor unitario</th>
            <th>Estado</th>
          </tr>
          <tr>
            <td colSpan="10">
              <Link to="/goto" className="tableAddLink">
                <i class="bi bi-plus-circle-fill tableAddIcon"></i>
              </Link>
            </td>
          </tr>
          <tr class="fila_impar">
            <td>1123</td>
            <td>Pedro</td>
            <td>5000</td>
            <td>
              {" "}
              <div class="btn-group">
              <select>
                  <option>Disponible</option>
                  <option>No Disponible</option>
                </select>
                <div class="dropdown-menu"></div>
              </div>
            </td>
          </tr>
          <tr class="fila_resaltada">
            <td>2025</td>
            <td>Paula</td>
            <td>2000</td>
            <td>
              {" "}
              <div>
                <select>
                  <option>Disponible</option>
                  <option>No Disponible</option>
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

export default Bodyproduct;
