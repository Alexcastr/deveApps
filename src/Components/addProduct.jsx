import React from "react";

const AddProduct = () => {
  return (
      <>
      <div className="AddProduct">
        <div className="BodyAddProduct">
                <div>
                <form>
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
                    <input className="BotonEnviar" type="submit" value="Guardar"/>
                    </div>
                </form>
                </div>
            </div>
        </div>
     </>
  );
};

export default AddProduct;
