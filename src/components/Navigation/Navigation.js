import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';

function Navigation(props) {
  const { loggedIn, darkTheme } = props;

  return (
    <nav className="nav">
      {loggedIn
        ? <>
          <div className="nav__films">
            <NavLink to="/movies" className={`nav__link nav__link_weight_bold ${darkTheme && "nav__link_color_white"}`}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={`nav__link ${darkTheme && "nav__link_color_white"}`}>Сохранённые фильмы</NavLink>
          </div>
          <NavLink to="/profile" className="nav__link">Аккаунт<img alt='' src={profile} className="nav__profile-icon"></img></NavLink>
        </>
        : <>
          <NavLink to="/signup" className={`nav__link nav__link_weight_bold ${darkTheme && "nav__link_color_white"}`}>Регистрация</NavLink>
          <NavLink to="/signin" className="nav__link nav__link_weight_bold nav__link_bg_btn">Войти</NavLink>
        </>
      }
    </nav>
  );
}

export default Navigation;
