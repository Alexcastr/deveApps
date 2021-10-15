import React from "react";
import { nanoid } from "nanoid";
const ProductInSale = ({ id, name, value }) => {
  return (
    <li className="productsInSale">
      <h5 className="productsInSaleItem1">{id}</h5>
      <h5 className="productsInSaleItem2">{name}</h5>
      <h5 className="productsInSaleItem1">amount</h5>
      <h5 className="productsInSaleItem2">{value}</h5>
    </li>
  );
};

export default ProductInSale;
