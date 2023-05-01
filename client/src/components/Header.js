import React from 'react';
import './Header.css';
import TemporaryDrawer from './Drawer';
import Clock from './Clock';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="Header">
      <TemporaryDrawer/>
      {/* <Clock/> */}
      <div className="Logo">yaeli's cakes</div>
      <nav className="Navigation">
        <a href="">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        {/* <a href="/login">Server</a> */}
        <Link to="/login">Server</Link>

        
      </nav>
    </header>
  );
};

export default Header;
