import Nav from "./components/Nav";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import MyContext from "./MyContext";
import TemporaryDrawer from "./components/Drawer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from "./components/server.js"



const App = () => {
  const Allproducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
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
    <MyContext.Provider value={{productsData ,setproductsData,Allproducts,productsCopy,buyProduct,setbuyProduct}}>
    <div  className="App">
    <Link to="/admin">
        <button className="admin-button">Admin</button></Link>
      <TemporaryDrawer/>
      <Nav/>
      

      <Products/>
    </div>
    </MyContext.Provider>
    
  );
};

export default App;
