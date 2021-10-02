import React from "react";

const AddProduct = () => {
  return (
      <>
      <body className="center-content mt-1">
       <div className="table">
        <div className="BodyAddProduct">
          <div className="iconAddProduct">
            <i class="bi bi-server navButton"></i>
                </div>
                <div className="gridAddProduct">
                <form>
                    <div className="item1">
                    <div>
                    <label>
                    ID:
                    <input type="number"/>
                    </label>
                    </div>
                    <div>
                    <label>
                    Estado:
                    <select placeholder="seleccionar">
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                    </label>
                    </div>
                    </div>
                    <div className="item3">
                    <label>
                    Valor unitario:
                    <input type="number"/>
                    </label>
                    </div>
                    <div className="item4">
                    <label>
                    Descripción:
                    <br/>
                    <textarea rows="5" cols="80"></textarea>
                    </label>
                    </div>
                    <div>
                    <input type="submit" value="Guardar"/>
                    </div>
                </form>
                </div>
            </div>
        </div>
      </body>
     </>
  );
};

export default AddProduct;
