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
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="/admin">Server</a>
        
      </nav>
    </header>
  );
};

export default Header;
