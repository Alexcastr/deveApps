import { Link } from "react-router-dom";

const SalesButton = ({ clase }) => {
  return (
    <div className="buttonContainer">
      <Link className={clase} to="/ventas">
        <i class="bi bi-list-check navButton"></i>
        <p>Ventas</p>
      </Link>
    </div>
  );
};

export default SalesButton;
