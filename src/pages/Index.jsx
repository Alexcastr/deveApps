import React from "react";

const Index = () => {
  return (
    <>
      <header></header>
      <main>
        <section className="contenedorPrincipal">
          <form className="contenedorLogin">
            <h1 className="tituloForm">Iniciar Sesión</h1>
            <div className="datosFormulario">
              <div className="seccionDatos">
                <div>
                  <label for="usuario">
                    <span className="etiqueta">Identificación</span>
                  </label>
                </div>
                <div className="campo">
                  <input
                    name="usuario"
                    type="text"
                    required
                    className="campoEntrada"
                  />
                </div>
                <br />
              </div>

              <div className="seccionDatos">
                <div>
                  <label for="contraseña">
                    <span className="etiqueta">Contraseña</span>
                  </label>
                </div>
                <div className="campo">
                  <input type="password" required className="campoEntrada" />
                </div>
                <br />
              </div>

              <div className="seccionDatos">
                <div>
                  <label for="rol">
                    <span className="etiqueta">Rol</span>
                  </label>
                </div>
                <div className="campo">
                  <select name="rol" className="campoEntrada">
                    <option value="rol1">Vendedor</option>
                    <option value="rol2">Administrador</option>
                    <option value="rol3">Ejecutivo</option>
                    <option value="rol4">Operario</option>
                    <option value="rol5">Director</option>
                    <option value="rol6">Gerente Comercial</option>
                  </select>
                </div>
                <br />
              </div>
            </div>
            <div className="botonCaja">
              <button type="submit" className="boton">
                Ingresar
              </button>
              <button type="reset" className="boton">
                Limpiar
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Index;
