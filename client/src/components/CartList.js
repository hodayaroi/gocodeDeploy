import React from "react";
import { useLocation } from "react-router-dom";
import Cartshopping from "./Cartshopping";
import { useNavigate } from "react-router-dom";
import Checkout from './CheckOut.js'
import "./CartList.css";
import { useContext } from "react";
import MyContext from "../MyContext";

const CartList = () => {
  const location = useLocation();
  const buyProduct = location.state.buyProduct || [];
  // const { buyProduct } = useContext(MyContext);
  const totalPrice = buyProduct.reduce(
    (total, product) => total + product.price * product.countProduct,
    0
  );
  const totalQuantity = buyProduct.reduce(
    (total, product) => total + product.countProduct,
    0
  );

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <div className="cart-list">
        {buyProduct.map((product) => (
          <div className="product-card" key={product._id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p >Quantity: {product.countProduct}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}₪</p>
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-summary">
        <Checkout/>
        <p className="total-items">Total Items: {totalQuantity}</p>
        <p className="total-price">Total Price: {totalPrice} ₪</p>
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartList;
