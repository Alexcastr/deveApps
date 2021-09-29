import { Link } from "react-router-dom";
const SalesBody = () => {
  return (
    <body className="salesTable">
      <div className="table">
        <table className="ml-auto mr-auto sales">
          <tr className="head-body">
            <th>ID</th>
            <th>Valor Total</th>
            <th>ID Producto</th>
            <th>Cantidad Producto</th>
            <th>Precio Unitario</th>
            <th>Fecha de venta</th>
            <th>ID Cliente</th>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Vendedor</th>
          </tr>
          <tr>
            <td colSpan="10">
              <Link to="/goto" className="tableAddLink">
                <i class="bi bi-plus-circle-fill tableAddIcon"></i>
              </Link>
            </td>
          </tr>
          <tr className="tablerow">
            <td>001</td>
            <td>50000</td>
            <td>
              <ul className="productList">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </td>
            <td>
              <ul className="productList">
                <li>3</li>
                <li>2</li>
                <li>1</li>
              </ul>
            </td>
            <td>
              <ul className="productList">
                <li>1000</li>
                <li>1500</li>
                <li>2500</li>
              </ul>
            </td>
            <td>28-09-2021</td>
            <td>0005</td>
            <td>Mario Hernandez</td>
            <td>
              <select>
                <option>En proceso</option>
                <option>Cancelada</option>
                <option>Entregada</option>
              </select>
            </td>
            <td>José Perez</td>
          </tr>
          <tr className="tablerow">
            <td>001</td>
            <td>50000</td>
            <td>
              <ul className="productList">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </td>
            <td>
              <ul className="productList">
                <li>3</li>
                <li>2</li>
                <li>1</li>
              </ul>
            </td>
            <td>
              <ul className="productList">
                <li>1000</li>
                <li>1500</li>
                <li>2500</li>
              </ul>
            </td>
            <td>28-09-2021</td>
            <td>0005</td>
            <td>Mario Hernandez</td>
            <td>
              <select>
                <option>En proceso</option>
                <option>Cancelada</option>
                <option>Entregada</option>
              </select>
            </td>
            <td>José Perez</td>
          </tr>
        </table>
      </div>
    </body>
  );
};

export default SalesBody;
