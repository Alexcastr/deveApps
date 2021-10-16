import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Sale from "./Sale";
import { nanoid } from "nanoid";
import { ToastContainer } from "react-toastify";
import { getSales } from "utils/apiSales";
import ReactLoading from "react-loading";

const SalesBody = () => {
  const [sales, setSales] = useState([]);
  const [filtro, setFiltro] = useState(sales);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [loading, setLoading] = useState(false);

  const [filteringId, setFilteringId] = useState(false);
  const [filteringClientId, setFilteringClientId] = useState(false);
  const [filteringClient, setFilteringClient] = useState(false);
  const [filteringSeller, setFilteringSeller] = useState(false);

  //Filtros
  const [filteringByIdValue, setFilteringByIdValue] = useState("");
  const [filteringByClientIdValue, setFilteringByClientIdValue] = useState("");
  const [filteringClientValue, setFilteringClientValue] = useState("");
  const [filteringSellerValue, setFilteringSellerValue] = useState("");

  useEffect(() => {
    setFiltro(sales);
  }, [ejecutarConsulta, sales]);

  //Get Sales
  useEffect(() => {
    const fetchSales = async () => {
      setLoading(true);
      await getSales(
        (response) => {
          setSales(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
    };
    if (ejecutarConsulta) {
      fetchSales();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    setFiltro(
      sales.filter((elemento) => {
        return JSON.stringify(elemento._id)
          .toLowerCase()
          .includes(filteringByIdValue.toLowerCase());
      })
    );
  }, [filteringByIdValue, sales]);

  useEffect(() => {
    setFiltro(
      sales.filter((elemento) => {
        return JSON.stringify(elemento.idCliente)
          .toLowerCase()
          .includes(filteringByClientIdValue.toLowerCase());
      })
    );
  }, [filteringByClientIdValue, sales]);

  useEffect(() => {
    setFiltro(
      sales.filter((elemento) => {
        return JSON.stringify(elemento.cliente)
          .toLowerCase()
          .includes(filteringClientValue.toLowerCase());
      })
    );
  }, [filteringClientValue, sales]);

  useEffect(() => {
    setFiltro(
      sales.filter((elemento) => {
        return JSON.stringify(elemento.vendedor)
          .toLowerCase()
          .includes(filteringSellerValue.toLowerCase());
      })
    );
  }, [filteringSellerValue, sales]);

  return (
    <div className="salesTable">
      <div className="table">
        {loading ? (
          <ReactLoading type="cylon" color="blue" height={667} width={375} />
        ) : (
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
                      <input
                        value={filteringByIdValue}
                        onChange={(e) => setFilteringByIdValue(e.target.value)}
                        type="text"
                        placeholder="Id de la venta"
                      />
                      <button
                        onClick={() => {
                          setFilteringId(false);
                          setFilteringByIdValue("");
                        }}
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
                      <input
                        type="number"
                        min="1"
                        onChange={(e) => {
                          setFilteringByClientIdValue(e.target.value);
                        }}
                        placeholder="Id del cliente"
                      />
                      <button
                        onClick={() => {
                          setFilteringClientId(false);
                          setFilteringByClientIdValue("");
                        }}
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
                      <input
                        type="text"
                        onChange={(e) => {
                          setFilteringClientValue(e.target.value);
                        }}
                        placeholder="Nombre del cliente"
                      />
                      <button
                        onClick={() => {
                          setFilteringClient(false);
                          setFilteringClientValue("");
                        }}
                        className="tableSearch"
                      >
                        <i className="bi bi-x-circle-fill"></i>
                      </button>
                    </>
                  )}
                </th>
                <th>Estado</th>
                <th>
                  {!filteringSeller ? (
                    <>
                      Vendedor
                      <button
                        className="tableSearch"
                        onClick={() => setFilteringSeller(true)}
                      >
                        <i className="bi bi-search"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        onChange={(e) => {
                          setFilteringSellerValue(e.target.value);
                        }}
                        placeholder="Nombre del vendedor"
                      />
                      <button
                        onClick={() => {
                          setFilteringSeller(false);
                          setFilteringSellerValue("");
                        }}
                        className="tableSearch"
                      >
                        <i className="bi bi-x-circle-fill"></i>
                      </button>
                    </>
                  )}
                </th>
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
              {filtro.map((item) => {
                return (
                  <Sale
                    key={nanoid()}
                    datos={item}
                    setEjecutarConsulta={setEjecutarConsulta}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

export default SalesBody;
