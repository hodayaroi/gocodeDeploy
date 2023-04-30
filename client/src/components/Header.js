import React from 'react';
import './Header.css';
import TemporaryDrawer from './Drawer';
import Clock from './Clock';

const Header = () => {
  return (
    <header className="Header">
      <TemporaryDrawer/>
      {/* <Clock/> */}
      <div className="Logo">yaeli's cakes</div>
      <nav className="Navigation">
        <a href="">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        {/* <a href="/admin">Server</a> */}
        <a href="/login">Server</a>

        
      </nav>
    </header>
  );
};

export default Header;
