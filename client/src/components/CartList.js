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
  console.log(buyProduct)
  return(
    <div className="cart-list"> {/* add a class to the container div */}
      {buyProduct.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartList;
