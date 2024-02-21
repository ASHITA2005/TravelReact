import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop1.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <p>Hotels</p>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
