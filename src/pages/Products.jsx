import React from "react";
import Header from "Components/header";
import Bodyproduct from "Components/bodyProduct";
import PrivateRoute from "Components/PrivateRoute";
const Products = () => {
  return (
    <PrivateRoute>
      <>
        <div>
          <Header current="productos" />
          <Bodyproduct />
        </div>
      </>
    </PrivateRoute>
  );
};

export default Products;
