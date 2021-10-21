import axios from "axios";
import GetToken from "./getToken";

export const getSales = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "https://ancient-dusk-64862.herokuapp.com/ventas/",
    headers: { Authorization: GetToken(),}
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const addSale = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "https://ancient-dusk-64862.herokuapp.com/ventas/",
    headers: { "Content-Type": "application/json", Authorization: GetToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const updateSale = async (
  id,
  data,
  successCallback,
  errorCallback
) => {
  const options = {
    method: "PATCH",
    url: `https://ancient-dusk-64862.herokuapp.com/ventas/${id}/`,
    headers: { "Content-Type": "application/json" , Authorization: GetToken(),},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteSale = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `https://ancient-dusk-64862.herokuapp.com/ventas/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken(), },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
