import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";

const User = ({ id, name, state, rol }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return !isEditing ? (
    <>
      <tr className="tablerow">
        <td>{id}</td>
        <td>{name}</td>
        <td>{state}</td>
        <td>{rol}</td>
        <td>
          <div className="iconActions">
            <Tooltip title="Editar producto" arrow>
              <button className="editButton">
                <i
                  onClick={() => setIsEditing(!isEditing)}
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
    <tr>
      <td>{id}</td>
      <td>
        <input type="text" placeholder="Nombre del Usuario" />
      </td>
      <td>
        <select>
          <option disabled>Pendiente</option>
          <option>Autorizado</option>
          <option>No Autorizado</option>
        </select>
      </td>
      <td>
        <select>
          <option>Administrador</option>
          <option>Vendedor</option>
        </select>
      </td>
      <td>
        <div className="iconActions">
          <Tooltip title="Confirmar edición" arrow>
            <button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
              className="confirmButton"
            >
              <i class="bi bi-check-circle-fill"></i>
            </button>
          </Tooltip>
          <Tooltip title="Cancelar edición" arrow>
            <button
              onClick={() => setIsEditing(!isEditing)}
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

export default User;
