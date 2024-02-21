import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CurrencyInr } from "phosphor-react";
/* <CurrencyInr size={32} /> */
export const Product = (props) => {
  const { id, productName,productDesc, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
   

    <div className="product">
      <div className="img-container">
      <img src={productImage} />
      </div>
      <div className="description">
        <p>
          <b>{productName}</b>
          <p>{productDesc}</p>
        </p>
      </div>
      <div className="box">
        <p> <CurrencyInr size={15} /> {price} per night</p>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Wishlist {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
    
    </div>
  );
};
