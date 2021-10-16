import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrivateComponent from "./PrivateComponent";
import Sale from "./Sale";

const SalesBody = () => {
  const [tableData, setTableData] = useState([]);
  const [filteringId, setFilteringId] = useState(false);
  const [filteringClientId, setFilteringClientId] = useState(false);
  const [filteringClient, setFilteringClient] = useState(false);

  return (
    <div className="salesTable">
      <div className="table">
        <table className="ml-auto mr-auto sales">
          <thead>
            <tr className="head-body">
              <th>
                {!filteringId ? (
                  <>
                    ID
                    <button
                      onClick={() => {
                        setFilteringId(true);
                      }}
                      className="tableSearch"
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <input type="number" min="1" placeholder="Id de la venta" />
                    <button
                      onClick={() => setFilteringId(false)}
                      className="tableSearch"
                    >
                      <i className="bi bi-x-circle-fill"></i>
                    </button>
                  </>
                )}
              </th>
              <th>Valor Total</th>
              <th>ID Productos</th>
              <th>Cantidad Productos</th>
              <th>Precios Unitarios</th>
              <th>Fecha de venta</th>
              <th>
                {!filteringClientId ? (
                  <>
                    ID Cliente
                    <button
                      className="tableSearch"
                      onClick={() => setFilteringClientId(true)}
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <input type="number" min="1" placeholder="Id del cliente" />
                    <button
                      onClick={() => setFilteringClientId(false)}
                      className="tableSearch"
                    >
                      <i className="bi bi-x-circle-fill"></i>
                    </button>
                  </>
                )}
              </th>
              <th>
                {!filteringClient ? (
                  <>
                    Cliente
                    <button
                      className="tableSearch"
                      onClick={() => setFilteringClient(true)}
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Nombre del cliente" />
                    <button
                      onClick={() => setFilteringClient(false)}
                      className="tableSearch"
                    >
                      <i className="bi bi-x-circle-fill"></i>
                    </button>
                  </>
                )}
              </th>
              <th>Estado</th>
              <th>Vendedor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <PrivateComponent roleList={['Administrador','Vendedor']}>
              <td colSpan="11">
                <Link to="/ventas/agregarventa" className="tableAddLink">
                  <i class="bi bi-plus-circle-fill tableAddIcon"></i>
                </Link>
              </td>
            </PrivateComponent>
            </tr>
            {tableData.map((item) => {
              return <Sale key={item.ID} datos={item} setData={setTableData} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesBody;
