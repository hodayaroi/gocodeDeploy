import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFoundPage from './components/NotFoundPage';
import ProductPage from './components/ProductPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path:"products/:productId",
    element: <ProductPage />
  },
  // {
  //   path: "about",
  //   element: <About />
  // },
  // {
    // path: "cart",
    // element: <Cart />
  // },
  {
    path: '*',
    element: <NotFoundPage />
  },

]);


root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);










