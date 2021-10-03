import React from "react";
import { useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  
  // const [mostrarProductos,setMostrarProductos] = useState(false);

  const form = useRef(null);

  const submitForm = (e) =>{
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    toast.success('Vehículo agregado con éxito');
  }; 
  return (
      <>
      <body className="center-content mt-1">
       <div className="table">
        <div className="BodyAddProduct">
          <div className="iconAddProduct">
            <i class="bi bi-server navButton"></i>
                </div>
                <div className="gridAddProduct">
                <form ref={form} onSubmit={submitForm}>
                    <div className="item1">
                    <div>
                    <label>
                    ID:
                    <input type="number" name = "id" required/>
                    </label>
                    </div>
                    <div>
                    <label>
                    Estado:
                    <select placeholder="seleccionar" name="available" required>
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                    </label>
                    </div>
                    </div>
                    <div className="item3">
                    <label>
                    Valor unitario:
                    <input type="number" name="value" required/>
                    </label>
                    </div>
                    <div className="item4">
                    <label>
                    Descripción:
                    <br/>
                    <textarea rows="5" cols="80" name="description"></textarea>
                    </label>
                    </div>
                    <div>
                    <button type="submit">Guardar</button>
                    </div>
                </form>
                </div>
            </div>
            <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
      </body>
     </>
  );
};

export default AddProduct;
