import Nav from "./components/Nav";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import MyContext from "./MyContext";
import TemporaryDrawer from "./components/Drawer";
import { BrowserRouter as Router, Route, Link, json } from "react-router-dom";
import Admin from "./components/server.js"
import Header from "./components/Header.js"
import { BrowserRouter } from 'react-router-dom';
import Login from "./components/LoginForm";




const App = () => {
  const Allproducts = async () => {
    const response = await fetch("http://localhost:9000/api/products");
    const data = await response.json();
    setproductsData(data);
    setproductsCopy(data);
  };
  const [productsData, setproductsData] = useState([]);
  const [productsCopy, setproductsCopy] = useState([]);
  const [buyProduct, setbuyProduct] = useState([]);

  useEffect(() => {
    Allproducts();
  }, []);

  useEffect(() => {
    console.log(buyProduct);
  }, [buyProduct]);

  return (
    // <BrowserRouter>
    <MyContext.Provider value={{productsData ,setproductsData,Allproducts,productsCopy,buyProduct,setbuyProduct}}>
     <div className="App">
      <Header />
        <Nav />
        <Products />
      </div>
    </MyContext.Provider>
    // </BrowserRouter>
    
  );
};

export default App;
