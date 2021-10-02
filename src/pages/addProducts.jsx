import React from 'react'
import AddProduct from 'Components/addProduct'
import AddingPageHeader from 'Components/AddingPageHeader'
const AProducts = () => {
    return (
        <>
         <AddingPageHeader backPage="/productos" pageTitle="Añadir Producto"/>
         <AddProduct/>
        </>
    )
}

export default AProducts