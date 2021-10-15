import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import { nanoid } from "nanoid";

const Sale = ({ datos }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    console.log("datos: ", datos);
  }, []);

  return !editMode ? (
    <>
      <tr className="tablerow">
        <td>{datos._id.slice(20)}</td>
        <td>${datos.valorTotal}</td>
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
              console.log(item);
              return <li key={nanoid()}>{item.value}</li>;
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
                setShowDialog(false);
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
      <td>{datos.ID}</td>
      <td>{datos.Price}</td>
      <td>
        <ul className="productList">
          {datos.ProductIds.map((item) => {
            return <li key={nanoid()}>{item}</li>;
          })}
        </ul>
      </td>
      <td>
        <ul className="productList">
          {datos.ProductAmounts.map((item) => {
            return <li key={nanoid()}>{item}</li>;
          })}
        </ul>
      </td>
      <td>
        <ul className="productList">
          {datos.ProductSinglePrice.map((item) => {
            return <li key={nanoid()}>{item}</li>;
          })}
        </ul>
      </td>
      <td>
        <input type="date" />
      </td>
      <td>
        <input
          placeholder="ID del cliente"
          type="number"
          name="clientIdInput"
          id="clientIdInput"
          className="editInput"
        />
      </td>
      <td>
        <input
          placeholder="Nombre del Cliente"
          type="text"
          name="clientInput"
          id="clientInput"
        />
      </td>
      <td>
        <select>
          <option disabled>Seleccionar</option>
          <option>En proceso</option>
          <option>En Camino</option>
          <option>Cancelada</option>
        </select>
      </td>
      <td>
        <input
          placeholder="Nombre del Vendedor"
          type="text"
          name="sellerNameInput"
          id="sellerNameInput"
        />
      </td>
      <td>
        <div className="iconActions">
          <Tooltip title="Confirmar edición" arrow>
            <button
              onClick={() => {
                setEditMode(!editMode);
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
