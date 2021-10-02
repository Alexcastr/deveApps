import FormBody from "Components/FormBody";
import React from "react";
import AddingPageHeader from "Components/AddingPageHeader";
import DoneButton from "Components/doneButton";
const AddSale = () => {
  return (
    <>
      <div className="AddVenta">
        <AddingPageHeader pageTitle="Añadir Venta" backPage="/ventas"/>
        <FormBody />
        <DoneButton/>
      </div>
    </>
  );
};

export default AddSale;
