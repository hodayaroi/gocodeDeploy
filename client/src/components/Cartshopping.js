import React, { useContext } from "react";
import MyContext from "../MyContext";
import { GoPlusSmall } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";
import {GiTrashCan} from "react-icons/gi"
import "./Cartshopping.css";

const Cartshopping = () => {
  const { buyProduct, setbuyProduct } = useContext(MyContext);

  const removeProduct = (id) => {
    if (id !== "") {
      const updatedBuyProduct = buyProduct.map((element) => {
        if (element.id === id) {
          const updatedElement = {
            ...element,
            countProduct: element.countProduct - 1,
          };
          if (updatedElement.countProduct <= 0) {
            return null;
          } else {
            return updatedElement;
          }
        } else {
          return element;
        }
      }).filter((element) => element !== null);
      setbuyProduct(updatedBuyProduct);
      console.log(updatedBuyProduct);
    }
  };
  
  
  

  const addProduct = (id) => {
    if (id) {
      const updatedProducts = buyProduct.map((product) => {
        if (product.id === id) {
          return { ...product, countProduct: product.countProduct + 1 };
        }
        return product;
      });
      setbuyProduct(updatedProducts);
    }
  };

  const total = buyProduct.reduce((acc, product) => {
    if (product && product.price) {
      return acc + product.price * product.countProduct;
    } else {
      return acc;
    }
  }, 0);

  const remove = (id) => {
    if (id) {
      const updatedProducts = buyProduct.filter((product) => {
        if (product.id !== id) {
          return product;
        }
      });
      setbuyProduct(updatedProducts);
    }
  };
  

  return (
    <div className="cart-container">
      <div className="cart-items">
        {buyProduct &&
          buyProduct.map((product) =>
            product && product.id && product.title && product.countProduct && product.image ? (
              <div className="cart-item" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-details">
                  <h5 className="product-title">{product.title}</h5>
                  <div className="product-price">{product.price} USD</div>
                  <div className="product-quantity">
                    <HiMinusSm  onClick={() => removeProduct(product.id)}/>
                    <span >{product.countProduct}</span>
                    <GoPlusSmall onClick={() => addProduct(product.id)}/>
                    <h5 className="remove" onClick={()=>remove(product.id)}>remove</h5>
                  </div>
                </div>
                </div>
                
               
            ) : <h5>The cart is empty</h5>
          )}
      </div>
       <div className="cart-summary">
                  
       <div className="total-price">Total: {total} USD</div>
       <button className="checkout-button">Checkout</button></div>
       
   </div>

  );
};

export default Cartshopping;