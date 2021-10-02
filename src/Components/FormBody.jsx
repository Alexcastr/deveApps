import React from "react";

const FormBody = () => {
  return (
    <div className = "FormVenta">
        <form> 
          <div className = "Div1">
            <div className = "DivForm1" >
              <label className= "labelForm" htmlFor = "ID">
                ID
                <input className= "InputForm" required/>
              </label> 
              <label className= "labelForm" htmlFor = "Estado">
                Estado
                <input className= "InputForm" required/>
              </label>  
              <label className= "labelForm" htmlFor = "IDProducto">
                ID Producto
                <input className= "InputForm" required/>
              </label>  
              <label className= "labelForm" htmlFor = "Cantidad">
                Cantidad
                <input className= "InputForm" required/>
              </label>
              <i className="bi bi-plus-circle-fill IconAgregar" onClick = { () => {alert("Agregar")} }>                
              </i>        
            </div>
            <div className = "DivForm2">
            <label className= "labelForm2" htmlFor = "Fecha">
                Fecha
                <input className= "InputForm" required/>
              </label>                
              <label className= "labelForm2" htmlFor = "Cliente">
                Cliente
                <input className= "InputForm" required/>
              </label>                
              <label className= "labelForm2" htmlFor = "IDCliente">
                ID Cliente
                <input className= "InputForm" required/>
              </label>  
            </div>
          </div>
          <div className = "DivForm3">
            <label className= "labelForm3" htmlFor = "ListaProductos">
                Lista De Productos               
            </label>
            <table className = "TableLP">
              <tr className ="TableGeneral">
                <th>
                  ID Producto
                </th>
                <th>
                  Nombre Producto
                </th>
                <th>
                  Cantidad
                </th>
              </tr>
            </table>            
          </div>                
        </form>
    </div>
  );
};

export default FormBody;
