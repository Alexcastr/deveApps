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
    toast.success("Producto agregado con éxito");
  };
  return (
      <>
      <div className="AddProduct">
        <div className="BodyAddProduct">
                <div>
                <form ref={form} onSubmit={submitForm}>
                    <div className="item1">
                    <div className="IDContainer">
                    <label className= "labelForm" htmlFor = "ID">
                    ID
                    <input className= "InputForm" required type="number"/>
                    </label>
                    </div>
                    <div className="EstadoContainer">
                    <label className= "labelForm" htmlFor = "Estado">
                    Estado
                    <select className= "InputForm" id="selectEstado" placeholder="seleccionar">
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                    </label>
                    </div>
                    </div>
                    <div className="item3">
                    <label className= "labelForm" htmlFor = "ValorUnitario">
                    Valor unitario
                    <input className= "InputForm" required type="number"/>
                    </label>
                    </div>
                    <div className="item4">
                    <label className= "labelForm" htmlFor = "Descripcion">
                    Descripción
                    <br/>
                    <div>
                  <textarea className="TArea" cols="75"></textarea>
                    </div>
                    </label>
                    </div>
                    <div className="BotonContainer">
                   <button className="addProductButton" type="submit">Guardar</button>
                    </div>
                </form>
                </div>
                <ToastContainer position='bottom-center' autoClose={5000} />
            </div>
        </div>
     </>
  );
};

export default AddProduct;
