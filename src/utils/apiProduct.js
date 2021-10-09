import axios from "axios";

export const obtenerProductos = async (setProducts, setEjecutarConsulta) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/productos/",
  };

  await axios
    .request(options)
    .then(function (response) {
      setProducts(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    setEjecutarConsulta(false);
};
