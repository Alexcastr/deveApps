import { Link } from "react-router-dom";
const Redirect = () => {
  return (
    <div className="mainRedirect">
      <div className="redirectContainer">
        <div className="gotoContainer">
          <Link to="/productos" className="redirectButton">
            <i class="bi bi-server redirectIcon"></i>
            <h1 className="redirectTitle">Productos</h1>
          </Link>
        </div>
        <div className="gotoContainer">
          <Link to="/usuarios" className="redirectButton">
            <i class="bi bi-person-circle redirectIcon"></i>
            <h1 className="redirectTitle">Usuarios</h1>
          </Link>
        </div>
        <div className="gotoContainer">
          <Link to="/ventas" className="redirectButton">
            <i class="bi bi-list-check redirectIcon"></i>
            <h1 className="redirectTitle">Ventas</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
