import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__films">
        <NavLink to="/movies" activeClassName="nav__link_active" className="nav__link">Фильмы</NavLink>
        <NavLink to="/saved-movies" activeClassName="nav__link_active" className="nav__link">Сохранённые фильмы</NavLink>
      </div>
      <NavLink to="/profile" className="nav__link">Аккаунт<img alt='' src={profile} className="nav__profile-icon"></img></NavLink>

    </nav>
  );
}

export default Navigation;
