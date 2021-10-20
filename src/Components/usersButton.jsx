import { Link } from "react-router-dom";

const UsersButton = ({ clase }) => {
  return (
    <div className="buttonContainer">
      <Link className={clase} to="/usuarios">
        <i className="bi bi-person-circle navButton"></i>
        <p>Usuarios</p>
      </Link>
    </div>
  );
};

export default UsersButton;
