import './Header.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const {loggedIn, darkTheme, onMenuToggle} = props;

  return (
    <header className="header block">
      <Navigation loggedIn={loggedIn} darkTheme={darkTheme} onMenuToggle={onMenuToggle}/>
    </header>
  );
}

export default Header;
