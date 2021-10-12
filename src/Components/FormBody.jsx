import React from "react";
import ProductInSale from "./ProductInSale";
const productsInSale = [
  { id: 200, name: "producto1", amount: 200, singlePrice: 2000 },
];

var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yy = date.getFullYear();
console.log(date)
var fechaActual = dd + "/" + mm + "/" + yy;

const FormBody = () => {
  return (
    <div className="FormVenta">
      <form>
        <div className="Div1">
          <div className="DivForm1">
            <label className="labelForm" htmlFor="ID">
              ID Vendedor
              <input className="InputForm" id="ID" required />
            </label>
            <label className="labelForm" htmlFor="Estado">
              Estado
              <select id="EstadoVenta" className="InputForm" required>
          <option disabled selected>Seleccionar</option>
          <option>En proceso</option>
          <option>Entregada</option>
          <option>Cancelada</option>
              </select>
            </label>
            <label className="labelForm" htmlFor="IDProducto">
              ID Producto
              <input className="InputForm" required />
            </label>
            <label className="labelForm" htmlFor="Cantidad">
              Cantidad
              <input className="InputForm" required />
            </label>
            <button className="addProductInSale IconAgregar">
              <i className="bi bi-plus-circle-fill"></i>
            </button>
            <h2 className="addProductInSaleLabel">Añadir Producto</h2>
          </div>
          <div className="DivForm2">
            <label className="labelForm2" htmlFor="Fecha">
              Fecha
              <input
                type="text"
                value={fechaActual}
                disabled
                className="InputForm"
                required
              />
            </label>
            <label className="labelForm2" htmlFor="Cliente">
              Cliente
              <input className="InputForm" required />
            </label>
            <label className="labelForm2" htmlFor="IDCliente">
              ID Cliente
              <input className="InputForm" required />
            </label>
          </div>
        </div>
        <div className="DivForm3">
          <h1>Productos en la venta actual</h1>
          <div className="productsInSaleDiv">
            <li className="productsInSale">
              <h4 className="productsInSaleItem1">ID</h4>
              <h4 className="productsInSaleItem2">NOMBRE</h4>
              <h4 className="productsInSaleItem1">CANTIDAD</h4>
              <h4 className="productsInSaleItem2">PRECIO</h4>
            </li>
            {productsInSale.map((item) => {
              return (
                <ProductInSale
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  amount={item.amount}
                  singlePrice={item.singlePrice}
                />
              );
            })}
          </div>
          <button type="submit" className="addSaleButton">
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBody;
