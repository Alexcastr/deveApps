import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProducts } from "utils/apiProduct";
import ProductRow from "./ProductRow";

const Bodyproduct = () => {
  const [filteringId, setFilteringId] = useState(false);
  const [filteringName, setFilteringName] = useState(false);
  const [products, setProducts] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [filtro, setFiltro] = useState(products);

  const [filteringByIdValue, setFilteringByIdValue] = useState("");
  const [filteringByNameValue, setFilteringByNameValue] = useState("");

  useEffect(() => {
    setFiltro(products);
  }, [ejecutarConsulta, products]);

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts(
        (response) => {
          setProducts(response.data);
          setEjecutarConsulta(false);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    if (ejecutarConsulta) {
      fetchProducts();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    setFiltro(
      products.filter((elemento) => {
        return JSON.stringify(elemento._id)
          .toLowerCase()
          .includes(filteringByIdValue.toLowerCase());
      })
    );
  }, [filteringByIdValue, products]);

  useEffect(() => {
    setFiltro(
      products.filter((elemento) => {
        return JSON.stringify(elemento.name)
          .toLowerCase()
          .includes(filteringByNameValue.toLowerCase());
      })
    );
  }, [filteringByNameValue, products]);

  return (
    <body className="center-content mt-1">
      <div className="table">
        <table className="ml-auto mr-auto">
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
                    type="text"
                    value={filteringByIdValue}
                    onChange={(e) => {
                      setFilteringByIdValue(e.target.value);
                    }}
                    placeholder="ID del producto"
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
            <th>
              {!filteringName ? (
                <>
                  Nombre
                  <button
                    onClick={() => {
                      setFilteringName(true);
                    }}
                    className="tableSearch"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={filteringByNameValue}
                    onChange={(e) => {
                      setFilteringByNameValue(e.target.value);
                    }}
                    placeholder="Nombre del producto"
                  />
                  <button
                    onClick={() => {
                      setFilteringName(false);
                      setFilteringByNameValue("");
                    }}
                    className="tableSearch"
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                </>
              )}
            </th>
            <th>Valor unitario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <td colSpan="10">
              <Link to="/productos/agregarproducto" className="tableAddLink">
                <i class="bi bi-plus-circle-fill tableAddIcon"></i>
              </Link>
            </td>
          </tr>
          <tbody>
            {filtro.map((product) => {
              return (
                <ProductRow
                  setEjecutarConsulta={setEjecutarConsulta}
                  key={nanoid}
                  product={product}
                />
              );
            })}
          </tbody>
        </table>
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </body>
  );
};

export default Bodyproduct;
