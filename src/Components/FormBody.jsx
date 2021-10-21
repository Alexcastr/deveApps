import React, { useState, useEffect, useRef } from "react";
import ProductInSale from "./ProductInSale";
import { getUsers } from "utils/apiUsers";
import { getProducts } from "utils/apiProduct";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import { addSale } from "utils/apiSales";
import { Dialog } from "@mui/material";

var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yy = date.getFullYear();
console.log(date);
var fechaActual = dd + "/" + mm + "/" + yy;

const FormBody = () => {
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [productos, setProductos] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  const [productosEnVenta, setProductosEnVenta] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState({});
  const [vendedorSeleccionado, setVendedorSeleccionado] = useState("");
  const [cantidadProductosEnVenta, setCantidadProductosEnVenta] = useState(1);
  const [valorTotal, setValorTotal] = useState(0);
  const [dialogoProductosVacios, setDialogoProductosVacios] = useState(false);
  const [dialogoProductoSeleccionado, setDialogoProductoSeleccionado] =
    useState(false);

  useEffect(() => {
    console.log("producto seleccionado ", productoSeleccionado);
  }, [productoSeleccionado]);

  useEffect(() => {
    getProducts(
      (response) => {
        setProductos(response.data);
        setEjecutarConsulta(false);
        console.log("productos: ", productos);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  useEffect(() => {
    getUsers(
      (response) => {
        setVendedores(response.data);
        setEjecutarConsulta(false);
        console.log("vendedores: ", vendedores);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const form = useRef(null);
  const nuevaVenta = {};

  const submitForm = async (e) => {
    e.preventDefault();
    if (productosEnVenta.length === 0) {
      setDialogoProductosVacios(true);
    } else {
      const fd = new FormData(form.current);

      fd.forEach((value, key) => {
        console.log(value, key);
        nuevaVenta[key] = value;
      });

      const infoConsolidada = {
        estado: nuevaVenta.estado,
        vendedor: vendedores.filter((el) => el._id === nuevaVenta.vendedor),
        productos: productosEnVenta,
        cliente: nuevaVenta.nombreCliente,
        idCliente: nuevaVenta.idCliente,
        fecha: fechaActual,
        valorTotal: valorTotal,
      };

      await addSale(
        infoConsolidada,
        (response) => {
          console.log(response.data);
          toast.success("Venta agregada con éxito");
        },
        (error) => {
          toast.error("Error agregando la venta");
          console.error(error);
        }
      );
    }
  };
  return (
    <div className="FormVenta">
      <ToastContainer />
      <form ref={form} onSubmit={submitForm}>
        <div className="Div1">
          <div className="DivForm1">
            <label className="labelForm" htmlFor="Estado">
              Estado
              <select
                name="estado"
                id="EstadoVenta"
                className="InputForm"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Seleccionar
                </option>
                <option>En proceso</option>
                <option>Entregada</option>
                <option>Cancelada</option>
              </select>
            </label>
            <label className="labelForm" htmlFor="IDProducto">
              Producto
              <select
                name="producto"
                id="SeleccionarProducto"
                className="InputForm"
                defaultValue=""
                required
                onChange={(e) => {
                  setProductoSeleccionado(
                    productos.filter((el) => el._id === e.target.value)
                  );
                }}
              >
                <option value="" disabled>
                  Seleccionar
                </option>

                {productos.map((p) => {
                  if (p.selection.toLowerCase() === "disponible") {
                    return (
                      <option value={p._id} key={p._id}>
                        {p.name}
                      </option>
                    );
                  }
                })}
              </select>
            </label>
            <label className="labelForm" htmlFor="Cantidad">
              Cantidad
              <input
                name="cantidadProducto"
                type="number"
                value={cantidadProductosEnVenta}
                onChange={(e) => {
                  setCantidadProductosEnVenta(e.target.value);
                }}
                min="1"
                max="99"
                className="InputForm"
                required
              />
            </label>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                if (Object.keys(productoSeleccionado).length === 0) {
                  setDialogoProductoSeleccionado(true);
                } else {
                  setValorTotal(
                    valorTotal +
                      parseInt(cantidadProductosEnVenta) *
                        parseInt(productoSeleccionado[0].value)
                  );
                  const productoAnadido = {
                    id: productoSeleccionado[0]._id,
                    name: productoSeleccionado[0].name,
                    value: productoSeleccionado[0].value,
                    amount: cantidadProductosEnVenta,
                  };
                  setProductosEnVenta([...productosEnVenta, productoAnadido]);
                }
              }}
              className="addProductInSale IconAgregar"
            >
              <i className="bi bi-plus-circle-fill"></i>
            </button>
            <h2 className="addProductInSaleLabel">Añadir Producto</h2>
          </div>
          <div className="DivForm2">
            <label className="labelForm" htmlFor="ID">
              Vendedor
              <select
                name="vendedor"
                id="SeleccionarVendedor"
                className="InputForm"
                defaultValue=""
                onChange={(e) => {
                  setVendedorSeleccionado(e.target.value);
                }}
                value={vendedorSeleccionado}
                required
              >
                <option value="" disabled>
                  Seleccionar
                </option>
                {vendedores.map((v) => {
                  console.log("Vendedores: ", vendedores);
                  if (
                    v.role.toLowerCase() === "vendedor" &&
                    v.state.toLowerCase() === "autorizado"
                  ) {
                    console.log("Vendedor: ", v);
                    return (
                      <option value={v._id} key={nanoid()}>
                        {v.name}
                      </option>
                    );
                  }
                })}
              </select>
            </label>
            <label className="labelForm2" htmlFor="Fecha">
              Fecha
              <input
                name="fecha"
                type="text"
                value={fechaActual}
                disabled
                className="InputForm"
                required
              />
            </label>
            <label className="labelForm2" htmlFor="Cliente">
              Cliente
              <input name="nombreCliente" className="InputForm" required />
            </label>
            <label className="labelForm2" htmlFor="IDCliente">
              ID Cliente
              <input
                name="idCliente"
                type="number"
                className="InputForm"
                min="1"
                required
              />
            </label>
          </div>
        </div>
        <div className="DivForm3">
          <h1>Productos en la venta actual</h1>
          <h4>Valor total: &#36;{valorTotal}</h4>
          <div className="productsInSaleDiv">
            <li className="productsInSale">
              <h4 className="productsInSaleItem1">ID</h4>
              <h4 className="productsInSaleItem2">NOMBRE</h4>
              <h4 className="productsInSaleItem1">CANTIDAD</h4>
              <h4 className="productsInSaleItem2">PRECIO</h4>
            </li>
            {productosEnVenta.map((item) => {
              return (
                <ProductInSale
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  amount={item.amount}
                  key={nanoid()}
                />
              );
            })}
          </div>
          <button className="addSaleButton">Añadir</button>
        </div>
      </form>
      <Dialog open={dialogoProductosVacios}>
        <div className="deleteSaleDialog">
          <h2>No has añadido productos a la venta</h2>
          <div className="deleteSaleDialogButtonsDiv">
            <button
              onClick={() => {
                setDialogoProductosVacios(false);
              }}
              className="confirmSaleDelete"
            >
              OK
              <i className="bi bi-check" />
            </button>
          </div>
        </div>
      </Dialog>
      <Dialog open={dialogoProductoSeleccionado}>
        <div className="deleteSaleDialog">
          <h2>No has seleccionado un producto</h2>
          <div className="deleteSaleDialogButtonsDiv">
            <button
              onClick={() => {
                setDialogoProductoSeleccionado(false);
              }}
              className="confirmSaleDelete"
            >
              OK
              <i className="bi bi-check" />
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default FormBody;
