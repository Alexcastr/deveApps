import axios from "axios";
import GetToken from "./getToken";

export const getSales = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/ventas/",
    headers: { Authorization: GetToken(),}
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const addSale = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/ventas/",
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
    url: `http://localhost:5000/ventas/${id}/`,
    headers: { "Content-Type": "application/json" , Authorization: GetToken(),},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteSale = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:5000/ventas/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: GetToken(), },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
