import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Bodyproduct = () => {
  const productList = [
    {
      id: "1",
      name: "producto1",
      value: 5900,
      selection: "disponible",
    },
    {
      id: "2dc",
      name: "producto2",
      value: 10000,
      selection: "disponible",
    },
    {
      id: "99f",
      name: "producto3",
      value: 3000,
      selection: "disponible",
    },
    {
      id: "40pc",
      name: "producto4",
      value: 8900,
      selection: "disponible",
    },
    {
      id: "45-p",
      name: "producto5",
      value: 4900,
      selection: "disponible",
    },
    {
      id: "00-5c",
      name: "producto6",
      value: 7000,
      selection: "disponible",
    },
  ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productList);
  }, []);

  return <TableList productList={products} />;
};

const ProductRow = ({ product }) => {
  const [edit, setEdit] = useState(false);
  const [infoNewProduct, setInfoNewProduct] = useState({
    name: product.name,
    value: product.value,
    selection: product.selection,
  });

  const updateProduct = () => {
    console.log(infoNewProduct);
  };

  const getSelected = () => {
    const combo = document.getElementById("list")
    const selected = combo.options[combo.selectedIndex].text;
    setInfoNewProduct({...infoNewProduct, selection:selected})
    return(infoNewProduct)
  }

  return (
    <tr class="fila_impar">
      {edit ? (
        <>
          <td>{product.id}</td>
          <td>
            <input
              className="editInput"
              type="text"
              defaultValue={infoNewProduct.name}
              onClick={(e) =>
                setInfoNewProduct({ ...infoNewProduct, name: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className="editInput"
              type="number"
              defaultValue={infoNewProduct.value}
              onClick={(e) =>
                setInfoNewProduct({ ...infoNewProduct, value: e.target.value })
              }
            />
          </td>
          <td>
            {" "}
            <div class="btn-group">
              <select id="list" name="list" onChange={()=>getSelected()}>
                <option value="Disponible">Disponible</option>
                <option value="No Disponible">No Disponible</option>
              </select>
              <div class="dropdown-menu"></div>
            </div>
          </td>
          <td>
            <div className="iconActions">
              <button onClick={() => updateProduct()} className="confirmButton">
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
                  {product.selection}
                </option>
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
              return <ProductRow key={nanoid} product={product} />;
            })}
          </tbody>
        </table>
      </div>
    </body>
  );
};

export default Bodyproduct;
