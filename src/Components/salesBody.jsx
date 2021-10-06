import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sale from "./Sale";
import Data from "../data.json";

const SalesBody = () => {
  const [tableData, setTableData] = useState(Data);
  const removeData = () => {
    
  }
  return (
    <div className="salesTable">
      <div className="table">
        <table className="ml-auto mr-auto sales">
          <thead>
            <tr className="head-body">
              <th>ID</th>
              <th>Valor Total</th>
              <th>ID Producto</th>
              <th>Cantidad Producto</th>
              <th>Precio Unitario</th>
              <th>Fecha de venta</th>
              <th>ID Cliente</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Vendedor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="11">
                <Link to="/ventas/agregarventa" className="tableAddLink">
                  <i class="bi bi-plus-circle-fill tableAddIcon"></i>
                </Link>
              </td>
            </tr>
            {tableData.map((item) => {
              return (
                <Sale key={item.ID} datos={item} setData = {setTableData}/>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesBody;
