import { Link } from "react-router-dom";
import PrivateRoute from "Components/PrivateRoute";
import PrivateComponent from "Components/PrivateComponent";
const Redirect = () => {
  return (
    <PrivateRoute>
      <div className="mainRedirect">
        <div className="redirectContainer">
          <div className="gotoContainer">
            <Link to="/productos" className="redirectButton">
              <i class="bi bi-server redirectIcon"></i>
              <h1 className="redirectTitle">Productos</h1>
            </Link>
          </div>
          <PrivateComponent roleList={['Administrador']}>
          <div className="gotoContainer">
            <Link to="/usuarios" className="redirectButton">
              <i class="bi bi-person-circle redirectIcon"></i>
              <h1 className="redirectTitle">Usuarios</h1>
            </Link>
          </div>
          </PrivateComponent>
          <div className="gotoContainer">
            <Link to="/ventas" className="redirectButton">
              <i class="bi bi-list-check redirectIcon"></i>
              <h1 className="redirectTitle">Ventas</h1>
            </Link>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Redirect;
