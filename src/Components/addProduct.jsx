import React from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  // const [mostrarProductos,setMostrarProductos] = useState(false);

  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    toast.success("Vehículo agregado con éxito");
  };
  return (
    <>
      <body className="FormVenta">
        <div className="BodyAddProduct">
          <div className="iconAddProduct">
            <i class="bi bi-server navButton"></i>
          </div>
          <div className="gridAddProduct">
            <form ref={form} onSubmit={submitForm} className="productForm">
              <div className="item1">
                <label>
                  ID:
                  <input type="number" name="id" required />
                </label>
                <label>
                  Estado:
                  <select
                    className="item1-select"
                    placeholder="seleccionar"
                    name="available"
                    required
                  >
                    <option>Disponible</option>
                    <option>No Disponible</option>
                  </select>
                </label>
              </div>
              <label className="item2">
                Valor unitario:
                <input type="number" name="value" required />
              </label>
              <label className="item3">
                Descripción:
                <textarea rows="5" cols="80" name="description"></textarea>
              </label>
              <div className="buttonAddProduct">
                <button type="submit">Guardar</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer position="bottom-center" autoClose={5000} />
      </body>
    </>
  );
};

export default AddProduct;
