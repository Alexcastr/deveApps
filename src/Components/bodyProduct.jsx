import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";


const Bodyproduct =()=>{
  
const productList =
[
{
  id: "1",
  name: "producto1",
  value: 5900,
},
{
  id: "2dc",
  name: "producto2",
  value: 10000,
},
{
  id: "99f",
  name: "Toyota",
  value: 3000,
},
{
  id: "40pc",
  name: "Ford",
  value: 8900,
},
{
  id: "45-p",
  name: "Mazda",
  value: 4900,
},
{
  id: "00-5c",
  name: "Onix",
  value: 7000,
},
];
  const [products, setProducts] = useState([]);

useEffect(() => {
  setProducts(productList);
}, []);

return(
  <TableList productList={products}/>
)
}

const FilaProducto = ({ product }) => {
  const [edit, setEdit] = useState(false);

  return (
    <tr class="fila_impar">
      {edit ? (
        <>
          <td>{product.id}</td>
          <td>
            <input className="editInput" type="text" />
          </td>
          <td>
            <input className="editInput" type="number" />
          </td>
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
          <td>
            <div className="iconActions">
              <button className="confirmButton">
                <i
                  onClick={() => setEdit(!edit)}
                  class="bi bi-check-circle-fill"
                ></i>
              </button>
              <button className="deleteButton">
                <i class="bi bi-trash-fill"></i>
              </button>
            </div>
          </td>
        </>
      ) : (
        <>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.value}</td>
          <td>
            {" "}
            <div class="btn-group">
              <select>
                <option selected disabled>
                  Disponible
                </option>
                <option disabled>No Disponible</option>
              </select>
              <div class="dropdown-menu"></div>
            </div>
          </td>
          <td>
            <div className="iconActions">
              <button className="editButton">
                <i onClick={() => setEdit(!edit)} class="bi bi-pencil-fill"></i>
              </button>
              <button className="deleteButton">
                <i class="bi bi-trash-fill"></i>
              </button>
            </div>
          </td>
        </>
      )}
    </tr>
  );
};

const TableList = ({ productList }) => {
  return (
    <body className="center-content mt-1">
      <div className="table">
        <table className="ml-auto mr-auto">
          <tr className="head-body">
            <th>ID</th>
            <th>Nombre</th>
            <th>Valor unitario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <td colSpan="10">
              <Link to="/productos/agregarproducto" className="tableAddLink">
                <i class="bi bi-plus-circle-fill tableAddIcon"></i>
              </Link>
            </td>
          </tr>
          <tbody>
            {productList.map((product) => {
              return <FilaProducto key={nanoid} product={product} />;
            })}
          </tbody>
        </table>
      </div>
    </body>
  );
};

export default Bodyproduct;
