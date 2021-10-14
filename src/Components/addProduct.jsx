import React from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from "utils/apiProduct";

const AddProduct = () => {
  const form = useRef(null);
  const nuevoProducto = {};

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    fd.forEach((value, key) => {
      console.log(value, key);
      nuevoProducto[key] = value;
    });

    await addProduct(
      {
        name: nuevoProducto.name,
        selection: nuevoProducto.selection,
        value: nuevoProducto.value,
      },
      (response) => {
        console.log(response.data);
        toast.success("Producto agregado con éxito");
      },
      (error) => {
        toast.error("Error agregando el producto");
        console.error(error);
      }
    );
};
  return (
    <>
      <div className="AddProduct">
        <form ref={form} onSubmit={submitForm} className="BodyAddProduct">
          <div className="item1">
            <label className="labelForm" htmlFor="name">
              Producto
              <input name="name" className="InputForm" required type="text" />
            </label>
            <label className="labelForm" htmlFor="Estado">
              Estado
              <select className="InputForm" id="selection" name="selection">
                <option>Disponible</option>
                <option>No Disponible</option>
              </select>
            </label>
          </div>
          <div className="item3">
            <label className="labelForm" htmlFor="ValorUnitario">
              Valor unitario
              <input
                name="value"
                className="InputForm"
                required
                type="number"
              />
            </label>
          </div>
          <div className="item4">
            <label className="labelForm" htmlFor="Descripcion">
              Descripción
              <div>
                <textarea className="TArea" cols="75"></textarea>
              </div>
            </label>
          </div>
          <div className="BotonContainer">
            <button className="addProductButton" type="submit">
              Guardar
            </button>
          </div>
        </form>
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </>
  );
};

export default AddProduct;
