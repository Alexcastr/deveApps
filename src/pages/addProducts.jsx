import React from "react";
import AddProduct from "Components/addProduct";
import AddingPageHeader from "Components/AddingPageHeader";
import PrivateRoute from "Components/PrivateRoute";

const AProducts = () => {
  return (
    <PrivateRoute>
      <>
        <AddingPageHeader backPage="/productos" pageTitle="Añadir Producto" />
        <AddProduct />
      </>
    </PrivateRoute>
  );
};

export default AProducts;
