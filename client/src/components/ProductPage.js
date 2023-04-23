import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [chosenProduct, setChosenProduct] = useState({});
  const { productId } = useParams();

  const fetchSingleProduct = async () => {
    console.log(productId)
    const response = await fetch(
      `http://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();
    setChosenProduct(data);
  };

  useEffect(() => {
    console.log(productId)
    fetchSingleProduct();
  }, [productId]);

  console.log(chosenProduct);
  
  return (
    <div className="product-details-container">
      {chosenProduct && (
        <div className="product-details">
          <img
            className="product-image"
            src={chosenProduct.image}
            alt={chosenProduct.title}
          />
          <div className="product-info">
            <h2 className="product-title">{chosenProduct.title}</h2>
            <p className="product-description">{chosenProduct.description}</p>
            <p className="product-category">{chosenProduct.category}</p>
            <p className="product-price">${chosenProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
      };

export default ProductPage;