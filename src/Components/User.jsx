import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { toast } from "react-toastify";

const User = ({ user, setExecuteQuery }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [infoNewUser, setInfoNewUser] = useState({
    name: user.name,
    state: user.state,
    role: user.role,
  });

  const updateUser = async () => {
    const options = {
      method: "PATCH",
      url: `http://localhost:5000/usuarios/${user._id}/`,
      headers: { "Content-Type": "application/json" },
      data: { ...infoNewUser },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setIsEditing(false);
        setExecuteQuery(true);
        toast.success("Usuario actualizado con éxito");
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error actualizando el usuario");
      });
  };

  const deleteUser = async () => {
    const options = {
      method: "DELETE",
      url: `http://localhost:5000/usuarios/${user._id}/`,
      headers: { "Content-Type": "application/json" },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setShowDialog(false);
        setExecuteQuery(true);
        toast.success("Usuario eliminado con éxito");
      })
      .catch(function (error) {
        console.error(error);
        setShowDialog(false);
        toast.error("Error eliminando el usuario");
      });
  };

  const getSelectedState = () => {
    const combo = document.getElementById("state");
    const selected = combo.options[combo.selectedIndex].text;
    setInfoNewUser({ ...infoNewUser, state: selected });
    return infoNewUser;
  };

  const getSelectedRole = () => {
    const combo = document.getElementById("role");
    const selected = combo.options[combo.selectedIndex].text;
    setInfoNewUser({ ...infoNewUser, role: selected });
    return infoNewUser;
  };

  return !isEditing ? (
    <>
      <tr className="tablerow">
        <td>{user._id.slice(20)}</td>
        <td>{user.name}</td>
        <td>{user.state}</td>
        <td>{user.role}</td>
        <td>
          <div className="iconActions">
            <Tooltip title="Editar usuario" arrow>
              <button className="editButton">
                <i
                  onClick={() => setIsEditing(!isEditing)}
                  class="bi bi-pencil-fill"
                ></i>
              </button>
            </Tooltip>
            <Tooltip title="Eliminar usuario" arrow>
              <button className="deleteButton">
                <i
                  onClick={() => {
                    setShowDialog(!showDialog);
                  }}
                  class="bi bi-trash-fill"
                ></i>
              </button>
            </Tooltip>
          </div>
        </td>
      </tr>
      <Dialog open={showDialog}>
        <div className="deleteSaleDialog">
          <h2>Seguro que deseas eliminar este usuario?</h2>
          <div className="deleteSaleDialogButtonsDiv">
            <button
              onClick={() => {
                deleteUser();
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
      <td>{user._id.slice(20)}</td>
      <td>
        <input
          type="text"
          defaultValue={infoNewUser.name}
          onChange={(e) =>
            setInfoNewUser({ ...infoNewUser, name: e.target.value })
          }
        />
      </td>
      <td>
        <select name="state" id="state" onChange={() => getSelectedState()}>
          <option selected disabled>
            seleccione una opción
          </option>
          <option value="Pendiente">Pendiente</option>
          <option value="Autorizado">Autorizado</option>
          <option value="No Autorizado">No Autorizado</option>
        </select>
      </td>
      <td>
        <select name="role" id="role" onChange={() => getSelectedRole()}>
          <option value="Administrador">Administrador</option>
          <option value="Vendedor">Vendedor</option>
        </select>
      </td>
      <td>
        <div className="iconActions">
          <Tooltip title="Confirmar edición" arrow>
            <button
              onClick={() => {
                updateUser();
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
