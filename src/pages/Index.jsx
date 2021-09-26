import React from "react";

const Index = () => {
  return (
    <>
      <main>
        <section className="contenedorPrincipal">
          <form className="contenedorLogin">
            <h1 className="tituloForm">DEVEAPP'S</h1>
            <div className="datosFormulario">
              <div className="seccionDatos">
                <div>
                  <label for="correo">
                    <span className="etiqueta">Correo</span>
                  </label>
                </div>
                <div className="campo">
                  <input
                    name="correo"
                    type="email"
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
            </div>
            <div className="botonCaja">
              <button type="submit" className="boton">
                LOG IN
              </button>
              <span className="etiqueta crearCuenta">¿No tienes una cuenta?</span>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Index;
