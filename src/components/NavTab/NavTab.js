import './NavTab.css';
import React from 'react';

function NavTab() {
  return (
    <nav className="navtab">
      <a className="navtab__link" href="#about">О проекте</a>
      <a className="navtab__link" href="#tech">Технологии</a>
      <a className="navtab__link" href="#student">Студент</a>
    </nav>
  );
}

export default NavTab;
