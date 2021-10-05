import React from "react";
import FormBody from "Components/FormBody";
import AddingPageHeader from "Components/AddingPageHeader";
const AddSale = () => {
  return (
    <>
      <div className="AddVenta">
        <AddingPageHeader pageTitle="Añadir Venta" backPage="/ventas"/>
        <FormBody />
      </div>
    </>
  );
};

export default AddSale;
