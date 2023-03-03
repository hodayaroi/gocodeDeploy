import React, {useContext } from "react";
import './products.css';
import Product from './Product';
import MyContext from '../MyContext'



const Products = () => {
  const {productsData} = useContext(MyContext)
  return (
    <section className="products">
      {productsData && productsData.map((product,i) => { 
        return(
        <Product
          key={product.id}
          id={product.id}
          imgUrl={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      )})}
    </section>
  );
};

  export default Products