import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import "react-toastify/dist/ReactToastify.css";
import { getUsers } from "utils/apiUsers";
import { updateSale, deleteSale } from "utils/apiSales";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Sale = ({ setEjecutarConsulta, datos }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [vendedores, setVendedores] = useState([]);
  const [nuevaVenta, setNuevaVenta] = useState({
    estado: datos.estado,
    cantidadProducto: datos.cantidadProducto,
    vendedor: datos.vendedor,
    productos: datos.productos,
    cliente: datos.cliente,
    idCliente: datos.idCliente,
    fecha: datos.fecha,
    valorTotal: datos.valorTotal,
  });

  useEffect(() => {
    console.log("Datos: ", datos);
  }, []);
  useEffect(() => {
    getUsers(
      (response) => {
        setVendedores(response.data);
        setEjecutarConsulta(false);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const DeleteSale = async () => {
    await deleteSale(
      datos._id,
      (response) => {
        console.log(response.data);
        setShowDialog(false);
        setEjecutarConsulta(true);
        toast.success("Venta eliminada con éxito");
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando la venta");
      }
    );
  };

  const UpdateSale = async () => {
    await updateSale(
      datos._id,
      nuevaVenta,
      (response) => {
        console.log(response.data);
        toast.success("Venta actualizada con éxito");
        setEditMode(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error actualizando la usuario");
      }
    );
  };

  const getSelectedState = () => {
    const combo = document.getElementById("stateList");
    const selected = combo.options[combo.selectedIndex].text;
    setNuevaVenta({ ...nuevaVenta, estado: selected });
    return nuevaVenta;
  };

  return !editMode ? (
    <>
      <tr className="tablerow">
        <td>{datos._id.slice(20)}</td>
        <td>&#36;{datos.valorTotal}</td>
        <td>
          <ul className="productList">
            {datos.productos.map((item) => {
              return <li key={nanoid()}>{item.id.slice(20)}</li>;
            })}
          </ul>
        </td>
        <td>
          <ul className="productList">
            {datos.productos.map((item) => {
              return <li key={nanoid()}>{item.amount}</li>;
            })}
          </ul>
        </td>
        <td>
          <ul className="productList">
            {datos.productos.map((item) => {
              return <li key={nanoid()}>&#36;{item.value}</li>;
            })}
          </ul>
        </td>
        <td>{datos.fecha}</td>
        <td>{datos.idCliente}</td>
        <td>{datos.cliente}</td>
        <td>{datos.estado}</td>
        <td>{datos.vendedor[0].name}</td>
        <td>
          <div className="iconActions">
            <Tooltip title="Editar producto" arrow>
              <button className="editButton">
                <i
                  onClick={() => setEditMode(!editMode)}
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
      </tr>
      <Dialog open={showDialog}>
        <div className="deleteSaleDialog">
          <h2>Seguro que deseas eliminar esta venta?</h2>
          <div className="deleteSaleDialogButtonsDiv">
            <button
              onClick={() => {
                DeleteSale();
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
  ) : (
    <tr className="tablerow">
      <td>{datos._id.slice(20)}</td>
      <td>{datos.valorTotal}</td>
      <td>
        <ul className="productList">
          {datos.productos.map((item) => {
            return <li key={nanoid()}>{item.id.slice(20)}</li>;
          })}
        </ul>
      </td>
      <td>
        <ul className="productList">
          {datos.productos.map((item) => {
            return <li key={nanoid()}>{item.amount}</li>;
          })}
        </ul>
      </td>
      <td>
        <ul className="productList">
          {datos.productos.map((item) => {
            return <li key={nanoid()}>&#36;{item.value}</li>;
          })}
        </ul>
      </td>
      <td>{datos.fecha}</td>
      <td>
        <input
          placeholder="ID del cliente"
          type="number"
          name="clientIdInput"
          id="clientIdInput"
          className="editInput"
          value={nuevaVenta.idCliente}
          onChange={(e) => {
            setNuevaVenta({ ...nuevaVenta, idCliente: e.target.value });
          }}
        />
      </td>
      <td>
        <input
          placeholder="Nombre del Cliente"
          type="text"
          name="clientInput"
          id="clientInput"
          value={nuevaVenta.cliente}
          onChange={(e) => {
            setNuevaVenta({ ...nuevaVenta, cliente: e.target.value });
          }}
        />
      </td>
      <td>
        <select
          id="stateList"
          name="stateList"
          onChange={() => getSelectedState()}
        >
          <option disabled>Seleccionar</option>
          <option>En proceso</option>
          <option>En Camino</option>
          <option>Cancelada</option>
        </select>
      </td>
      <td>{datos.vendedor[0].name}</td>
      <td>
        <div className="iconActions">
          <Tooltip title="Confirmar edición" arrow>
            <button
              onClick={() => {
                UpdateSale();
              }}
              className="confirmButton"
            >
              <i class="bi bi-check-circle-fill"></i>
            </button>
          </Tooltip>
          <Tooltip title="Cancelar edición" arrow>
            <button
              onClick={() => setEditMode(!editMode)}
              className="cancelProductButton"
            >
              <i class="bi bi-x-circle-fill "></i>
            </button>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};

export default Sale;
