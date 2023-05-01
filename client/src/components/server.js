import * as React from "react";
import { useTable } from "react-table";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import "./server.css"
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Admin() {
  const navigate = useNavigate()
  const [products, setProducts] = React.useState([]);
  const[updateProduct,setUpdateProduct]=useState(-1);
  const [formData,setFormData]=React.useState({
    title:'',
    image:'',
    dateCreated:Date.now(),
    category:'',
    description:'',
    price:''

  })

  
 
    
    


  const handleEdit=(id)=>{
    setUpdateProduct(id);
    // Find the selected product by ID
  const selectedProduct = products.find((product) => product._id === id);

  // Update the formData state with the values of the selected product
  setFormData({
    title: selectedProduct.title,
    image: selectedProduct.image,
    dateCreated: selectedProduct.dateCreated,
    category: selectedProduct.category,
    description: selectedProduct.description,
    price: selectedProduct.price
  });
  }

 

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
       
  

  const handleSubmit = (event) => {
    // event.preventDefault();
    const id = updateProduct;
    console.log(formData)
    console.log(JSON.stringify(formData))
  
    fetch(`https://novgocodeprojectdeployed-6ubu.onrender.com/api/updateProduct/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }

    })
      .then(response => response.json())
      .then(data => {
        const updatedProducts = products.map(product => {
          if (product._id === data._id) {
            return data;
            
          }
          return product;
        });
        setProducts(updatedProducts);
        setUpdateProduct(-1);
      })
      .catch(error => console.error(error));
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const id = updateProduct;
    console.log(JSON.stringify(formData))
  
    fetch(`https://novgocodeprojectdeployed-6ubu.onrender.com/api/addProduct`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }

    })
      .then(response => response.json())
      .then(data => {
        const updatedProducts = products.map(product => {
          if (product._id === data._id) {
            return data;
            
          }
          return product;
        });
        setProducts(updatedProducts);
        setUpdateProduct(-1);
      })
      .catch(error => console.error(error));
  };
  
   

  
  useEffect(()=>{
    fetch("https://novgocodeprojectdeployed-6ubu.onrender.com/api/products")
    .then(response=>response.json())
    .then(data =>{
      setProducts(data);

    })})


  const deleteProduct = (id)=>{
    fetch(`https://novgocodeprojectdeployed-6ubu.onrender.com/api/deleteProduct/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
      })
    })

  }

  
    const closeButtonStyle = {
      position: 'fixed',
      top: '0',
      left: '0',
    };

  return (
    <div className="Admin">
      <div style={closeButtonStyle}>
      <AiOutlineCloseCircle fontSize={30} color='red'  onClick={()=>{navigate(`/`)}} />
      </div>
      <h1>Admin Page</h1>
      <div className="AdminTable">
      <table>
        <thead>
          <tr>
          <th>title</th>
          <th>image</th>
          <th>date created</th>
          <th>category</th>
          <th>description</th>
          <th>price</th>
          <th></th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=>(
            updateProduct===product._id? 
            <tr  key={product._id} >
        <td><input type="text" name="title" placeholder="enter a title" defaultValue={product.title} onChange={handleInputChange}  /></td>
        <td><input type="text" name="image" placeholder="enter a url image" defaultValue={product.image} onChange={handleInputChange}/></td>
        <td>{product.dateCreated}</td>
        <td><input type="text" name="category" placeholder="enter a category" defaultValue={product.category} onChange={handleInputChange}  /></td>
        <td><input type="text" name="description" placeholder="enter a description" defaultValue={product.description} onChange={handleInputChange} /></td>
        <td><input type="number" name="price" placeholder="enter a price" defaultValue={product.price}onChange={handleInputChange}  /></td>
        <td>
          <button onClick={handleSubmit}>save</button>
        </td>
      </tr>:
            <tr className="Clickable-row" key={product._id}  >
              <td onClick={() => {navigate(`products/${product._id}`)}}>{product.title}</td>
              <td onClick={() => {navigate(`products/${product._id}`)}}><img src={product.image} alt={product.title}  style={{ maxWidth: '100%', height: 'auto' }} /></td>
              <td onClick={() => {navigate(`products/${product._id}`)}}>{new Date(product.dateCreated).toLocaleString('en-US', {timeZone: 'UTC', dateStyle: 'short', timeStyle: 'medium'})}</td>
              <td onClick={() => {navigate(`products/${product._id}`)}}>{product.category}</td>
              <td onClick={() => {navigate(`products/${product._id}`)}}>{product.description}</td>
              <td onClick={() => {navigate(`products/${product._id}`)}}>{product.price}₪</td>
              <td><button className="Delete-btn" onClick={()=>deleteProduct(product._id)}>delete</button></td>
              <td><button className="Edit-btn" onClick={()=>handleEdit(product._id)}>edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <h1>add product</h1>
      <form className="AddProduct" >
        <input type="text" name="title" required="required" placeholder="enter a title" onChange={handleInputChange}/>
        <input type="text" name="image" required="required" placeholder="enter a url image" onChange={handleInputChange}/>
        <input type="text" name="category" required="required" placeholder="enter a category" onChange={handleInputChange}/>
        <input type="text" name="description" required="required" placeholder="enter a description" onChange={handleInputChange}/>
        <input type="number" name="price" required="required" placeholder="enter a number" onChange={handleInputChange}/>
        <button type="sumbit" onClick={handleAdd}>add</button>
      </form>
      
    </div>
  );
}

export default Admin;
