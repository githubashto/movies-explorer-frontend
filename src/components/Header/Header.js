import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const {loggedIn, onMenuToggle} = props;

  return (
    <header className="header block">
      <Navigation loggedIn={loggedIn} onMenuToggle={onMenuToggle}/>
    </header>
  );
}

export default Header;
