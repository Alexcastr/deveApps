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
                <label for="correo">
                  <span className="label">Correo</span>
                  <input
                    name="correo"
                    type="email"
                    required
                    className="field"
                  />
                </label>
              </div>
              <div className="dataSection">
                <label for="contraseña">
                  <span className="label">Contraseña</span>
                  <input type="password" name="contraseña" required className="field" />
                </label>
              </div>
            </div>
            <div className="buttonField">
              <Link to="/goto" className="loginButton">
                <button type="submit">LOGIN</button>
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
