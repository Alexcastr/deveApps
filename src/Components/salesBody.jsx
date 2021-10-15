//TODO
  //SOLUCIONAR EL .map

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sale from "./Sale";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
import { ToastContainer } from "react-toastify";
import { getSales } from "utils/apiSales";
import ReactLoading from "react-loading";

const SalesBody = () => {
  const [sales, setSales] = useState([]);
  const [filtro, setFiltro] = useState(sales);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [loading, setLoading] = useState(false);

  //Filtros
  const [filteringId, setFilteringId] = useState(false);
  const [filteringClientId, setFilteringClientId] = useState(false);
  const [filteringClient, setFilteringClient] = useState(false);
  const [filteringByIdValue, setFilteringByIdValue] = useState("");
  const [filteringByClientIdValue, setFilteringByClientIdValue] = useState("");
  const [filteringClientValue, setFilteringClientValue] = useState("");

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
        return JSON.stringify(elemento.ClientId)
          .toLowerCase()
          .includes(filteringByClientIdValue.toLowerCase());
      })
    );
  }, [filteringByClientIdValue, sales]);

  useEffect(() => {
    setFiltro(
      sales.filter((elemento) => {
        return JSON.stringify(elemento.Client)
          .toLowerCase()
          .includes(filteringClientValue.toLowerCase());
      })
    );
  }, [filteringClientValue, sales]);

  useEffect(() => {
    setFiltro(sales);
  }, [ejecutarConsulta]);

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
                      <input
                        type="number"
                        min="1"
                        placeholder="Id del cliente"
                      />
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
                <td colSpan="11">
                  <Link to="/ventas/agregarventa" className="tableAddLink">
                    <i class="bi bi-plus-circle-fill tableAddIcon"></i>
                  </Link>
                </td>
              </tr>
              {sales.map((item) => {
                return <Sale key={nanoid()} datos={item} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SalesBody;
