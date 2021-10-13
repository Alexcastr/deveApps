import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import { updateProduct, deleteProduct } from "utils/apiProduct";

const ProductRow = ({ product, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [infoNewProduct, setInfoNewProduct] = useState({
    name: product.name,
    value: product.value,
    selection: product.selection,
  });

  const editProduct = async () => {
    await updateProduct(
      product._id,
      infoNewProduct,
      (response) => {
        console.log(response.data);
        toast.success("Producto modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error modificando el producto");
      }
    );
  };

  const eliminarProducto = async () => {
    await deleteProduct(
      product._id,
      (response) => {
        console.log(response.data);
        toast.success("Producto eliminado con éxito");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando el producto");
      }
    );
    setShowDialog(!setShowDialog);
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
                <button onClick={() => editProduct()} className="confirmButton">
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
                    eliminarProducto();
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
