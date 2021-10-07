import React from "react";
import { Link } from "react-router-dom";
const BackButton = ({ backPage }) => {
  return (
    <div className="buttonContainer">
      <Link to={backPage} className="buttonLink">
        <i className="bi bi-arrow-left-circle-fill navButton"></i>
        <p>Volver</p>
      </Link>
    </div>
  );
};

export default BackButton;
