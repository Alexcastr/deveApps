import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import { toast } from "react-toastify";
import { updateUser, deleteUser } from "utils/apiUsers";

const User = ({ user, setExecuteQuery }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [infoNewUser, setInfoNewUser] = useState({
    name: user.name,
    state: user.state,
    role: user.role,
  });

  const UpdateUser = async () => {
    await updateUser(
      user._id,
      infoNewUser,
      (response) => {
        console.log(response.data);
        toast.success("Usuario actualizado con éxito");
        setIsEditing(false);
        setExecuteQuery(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error actualizando el usuario");
      }
    );
  };

  const DeleteUser = async () => {
    await deleteUser(
      user._id,
      (response) => {
        console.log(response.data);
        setShowDialog(false);
        setExecuteQuery(true);
        toast.success("Usuario eliminado con éxito");
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando el usuario");
      }
    );
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
                DeleteUser();
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
        <select
          name="state"
          onChange={(e) =>
            setInfoNewUser({ ...infoNewUser, state: e.target.value })
          }
        >
          <option selected disabled>
            seleccione una opción
          </option>
          <option value="Pendiente">Pendiente</option>
          <option value="Autorizado">Autorizado</option>
          <option value="No Autorizado">No Autorizado</option>
        </select>
      </td>
      <td>
        <select
          name="role"
          onChange={(e) =>
            setInfoNewUser({ ...infoNewUser, role: e.target.value })
          }
        >
          <option selected disabled>
            seleccione una opción
          </option>
          <option value="Administrador">Administrador</option>
          <option value="Vendedor">Vendedor</option>
          <option value="Sin rol">Sin rol</option>
        </select>
      </td>
      <td>
        <div className="iconActions">
          <Tooltip title="Confirmar edición" arrow>
            <button
              onClick={() => {
                UpdateUser();
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
