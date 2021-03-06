import React from "react";
const ProductInSale = ({ id, name, value, amount }) => {
  return (
    <li className="productsInSale">
      <h5 className="productsInSaleItem1">{id.slice(20)}</h5>
      <h5 className="productsInSaleItem2">{name}</h5>
      <h5 className="productsInSaleItem1">{amount}</h5>
      <h5 className="productsInSaleItem2">&#36;{value}</h5>
      <div></div>
    </li>
  );
};

export default ProductInSale;
