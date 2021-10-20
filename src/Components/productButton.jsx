import { Link } from "react-router-dom";

const ProductButton = ({ clase }) => {
  return (
    <div className="buttonContainer">
      <Link className={clase} to="/productos">
        <i class="bi bi-server navButton"></i>
        <p>Productos</p>
      </Link>
    </div>
  );
};

export default ProductButton;
