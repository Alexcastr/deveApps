import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main>
        <section className="mainContainer">
          <form className="loginContainer">
            <h1 className="formTittle">DEVEAPP'S</h1>
            <div className="formField">
              <div className="dataSection">
                <div>
                  <label for="correo">
                    <span className="label">Correo</span>
                  </label>
                </div>
                <div className="field">
                  <input
                    name="correo"
                    type="email"
                    required
                    className="entry"
                  />
                </div>
               </div>

              <div className="dataSection">
                <div>
                  <label for="contraseña">
                    <span className="label">Contraseña</span>
                  </label>
                </div>
                <div className="field">
                  <input type="password" required className="entry" />
                </div>
              </div>
            </div>
            <div className="buttonField">
              <Link to="/goto" className="loginButton">
              <button type="submit">
                LOGIN
              </button>
              </Link>
              <span className="label newAccount">¿No tienes una cuenta?</span>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
