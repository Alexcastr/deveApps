import axios from "axios";
import GetToken from "./getToken";

export const getUsers = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/usuarios",
    headers: { Authorization: GetToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const updateUser = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteUser = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallback);
};
