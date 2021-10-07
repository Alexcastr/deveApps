import React from "react";

const ProductInSale = ({ id, name, amount, singlePrice }) => {
  return (
    <li className="productsInSale">
        <h5 className="productsInSaleItem1">{id}</h5>
        <h5 className="productsInSaleItem2">{name}</h5>
        <h5 className="productsInSaleItem1">{amount}</h5>
        <h5 className="productsInSaleItem2">{singlePrice}</h5>
    </li>
  );
};

export default ProductInSale;
