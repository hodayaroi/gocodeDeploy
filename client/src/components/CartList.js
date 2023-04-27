import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cartshopping from "./Cartshopping";
import MyContext from "../MyContext";
import { useContext } from "react";
import { useLocation } from 'react-router-dom';
import './CartList.css'; // import your CSS file

const CartList = () => { 
  const location = useLocation();
  const buyProduct = location.state.buyProduct || [];

  // Calculate the total price of all products in the cart
  const totalPrice = buyProduct.reduce((total, product) => total + product.price, 0);

  return (
    <div className="checkout-container">
      <div className="cart-list"> {/* add a class to the container div */}
        {buyProduct.map((product) => (
          <div key={product._id}>
            <h3>{product.title}</h3>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <p>{product.countProduct}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <p>Total Items: {buyProduct.length}</p>
        <p>Total Price: {totalPrice}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartList;
