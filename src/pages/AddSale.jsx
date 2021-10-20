import React from "react";
import FormBody from "Components/FormBody";
import AddingPageHeader from "Components/AddingPageHeader";
import PrivateRoute from "Components/PrivateRoute";
const AddSale = () => {
  return (
    <PrivateRoute>
      <>
        <div className="AddVenta">
          <AddingPageHeader pageTitle="Añadir Venta" backPage="/ventas" />
          <FormBody />
        </div>
      </>
    </PrivateRoute>
  );
};

export default AddSale;
