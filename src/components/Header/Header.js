import './Header.css';
import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.js';

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Movies Explorer" className="logo" />
        <Navigation />
    </header>
  );
}

export default Header;
