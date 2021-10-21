import axios from "axios";
import GetToken from "./getToken";

export const getUsers = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "https://ancient-dusk-64862.herokuapp.com/usuarios",
    headers: { Authorization: GetToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getUserData = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "https://ancient-dusk-64862.herokuapp.com/usuarios/self",
    headers: { Authorization: GetToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const updateUser = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `https://ancient-dusk-64862.herokuapp.com/usuarios/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteUser = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `https://ancient-dusk-64862.herokuapp.com/usuarios/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken() },
  };

  await axios.request(options).then(successCallback).catch(errorCallback);
};