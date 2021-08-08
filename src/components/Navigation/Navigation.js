import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';

function Navigation(props) {
  const { loggedIn } = props;

  return (
    <nav className="nav">
      {loggedIn
        ? <>
          <div className="nav__films">
            <NavLink to="/movies" className="nav__link nav__link_movies">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="nav__link">Сохранённые фильмы</NavLink>
          </div>
          <NavLink to="/profile" className="nav__link">Аккаунт<img alt='' src={profile} className="nav__profile-icon"></img></NavLink>
        </>
        : <>
          <NavLink to="/signup" className="nav__link nav__link_signup">Регистрация</NavLink>
          <NavLink to="/signin" className="nav__link nav__link_signin">Войти</NavLink>
        </>
      }
    </nav>
  );
}

export default Navigation;
