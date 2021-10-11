import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import { obtenerProductos } from "utils/apiProduct";
import axios from "axios";

const ProductRow = ({ product, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [infoNewProduct, setInfoNewProduct] = useState({
    name: product.name,
    value: product.value,
    selection: product.selection,
  });

  const updateProduct = async () => {
    //enviar la info al backend
    const options = {
      method: "PATCH",
      url: `http://localhost:5000/productos/${product._id}/`,
      headers: { "Content-Type": "application/json" },
      data: { ...infoNewProduct },
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Producto modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error("Error modificando el producto");
        console.error(error);
      });
  };

  const deleteProduct = async () => {
    const options = {
      method: "DELETE",
      url: `http://localhost:5000/productos/${product._id}/`,
      headers: { "Content-Type": "application/json" },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Producto eliminado con éxito");
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("No se pudo eliminar el producto");
      });
    setShowDialog(!showDialog);
  };

  const getSelected = () => {
    const combo = document.getElementById("list");
    const selected = combo.options[combo.selectedIndex].text;
    setInfoNewProduct({ ...infoNewProduct, selection: selected });
    return infoNewProduct;
  };

  return (
    <tr class="fila_impar">
      {edit ? (
        <>
          <td>{product._id.slice(20)}</td>
          <td>
            <input
              className="editInput"
              type="text"
              defaultValue={infoNewProduct.name}
              onChange={(e) =>
                setInfoNewProduct({ ...infoNewProduct, name: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className="editInput"
              type="number"
              defaultValue={infoNewProduct.value}
              onChange={(e) =>
                setInfoNewProduct({ ...infoNewProduct, value: e.target.value })
              }
            />
          </td>
          <td>
            {" "}
            <div class="btn-group">
              <select id="list" name="list" onChange={() => getSelected()}>
                <option selected disabled>
                  Seleccione una opción
                </option>
                <option value="Disponible">Disponible</option>
                <option value="No Disponible">No Disponible</option>
              </select>
              <div class="dropdown-menu"></div>
            </div>
          </td>
          <td>
            <div className="iconActions">
              <Tooltip title="Confirmar edición" arrow>
                <button
                  onClick={() => updateProduct()}
                  className="confirmButton"
                >
                  <i class="bi bi-check-circle-fill"></i>
                </button>
              </Tooltip>
              <Tooltip title="Cancelar edición" arrow>
                <button
                  onClick={() => setEdit(!edit)}
                  className="cancelProductButton"
                >
                  <i class="bi bi-x-circle-fill "></i>
                </button>
              </Tooltip>
            </div>
          </td>
        </>
      ) : (
        <>
          <td>{product._id.slice(20)}</td>
          <td>{product.name}</td>
          <td>{product.value}</td>
          <td>{product.selection}</td>
          <td>
            <div className="iconActions">
              <Tooltip title="Editar producto" arrow>
                <button className="editButton">
                  <i
                    onClick={() => setEdit(!edit)}
                    class="bi bi-pencil-fill"
                  ></i>
                </button>
              </Tooltip>
              <Tooltip title="Eliminar producto" arrow>
                <button className="deleteButton">
                  <i
                    onClick={() => setShowDialog(!showDialog)}
                    class="bi bi-trash-fill"
                  ></i>
                </button>
              </Tooltip>
            </div>
          </td>
          <Dialog open={showDialog}>
            <div className="deleteSaleDialog">
              <h2>Seguro que deseas eliminar este producto?</h2>
              <div className="deleteSaleDialogButtonsDiv">
                <button
                  onClick={() => {
                    deleteProduct();
                  }}
                  className="confirmSaleDelete"
                >
                  Si
                  <i className="bi bi-check" />
                </button>
                <button
                  onClick={() => setShowDialog(false)}
                  className="cancelSaleDelete"
                >
                  No <i className="bi bi-x" />
                </button>
              </div>
            </div>
          </Dialog>
        </>
      )}
    </tr>
  );
};

export default ProductRow;
