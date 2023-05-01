import React from 'react';
import './Header.css';
import TemporaryDrawer from './Drawer';
import Clock from './Clock';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <TemporaryDrawer/>
      {/* <Clock/> */}
      <div className="Logo">yaeli's cakes</div>
      <nav className="Navigation">
        <a href="">Home</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Server</Link>

        
      </nav>
    </header>
  );
};

export default Header;
