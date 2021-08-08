import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header(props) {
  const {children} = props;

  return (
    <header className="header">
      <NavLink to="/" className="nav__link nav__link_movies">
        <img src={logo} alt="Movies Explorer" className="logo" />
      </NavLink>

      {children}
    </header>
  );
}

export default Header;
