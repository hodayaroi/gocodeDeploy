import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFoundPage from './components/NotFoundPage';
import ProductPage from './components/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartList from './components/CartList';
import Admin from './components/server';
import Login from './components/LoginForm';
import About from './components/About.js'
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="https://novgocodeprojectdeployed-6ubu.onrender.com/about" element={<About />} />
        <Route path="/novgocodeprojectdeployed-6ubu.onrender.com/contact" element={<Contact />} />
        <Route path="/login/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="/login/admin/products/:productId" element={<ProductPage />} />
        <Route  path="/cartList" element={<CartList/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
