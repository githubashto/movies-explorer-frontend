import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';
import logo from '../../images/logo.svg';

function Navigation(props) {
  const { loggedIn, onMenuToggle } = props;

  return (
    <nav className="nav section__ultrawide-lmnt">
      <NavLink to="/" className="nav__link">
        <img src={logo} alt="Movies Explorer" className="logo" />
      </NavLink>
      {loggedIn
        ? <>
          <input id="toggle" className="nav__check" type="checkbox" />
          <label className="nav__toggle" htmlFor="toggle" onClick={onMenuToggle}>
            <span></span>
          </label>
          <div className="nav__right nav__right_layout_vertical">
            <NavLink to="/" className="nav__link nav__link_type_main" exact activeClassName="nav__link_active">Главная</NavLink>
            <NavLink to="/movies" className="nav__link" activeClassName="nav__link_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="nav__link" activeClassName="nav__link_active">Сохранённые фильмы</NavLink>
            <NavLink to="/profile" className="nav__link nav__link-btn">Аккаунт<img alt='Аккаунт' src={profile} className="nav__profile-icon"></img></NavLink>
          </div>
          </>
        : <>
          <div className="nav__right">
            <NavLink to="/signup" className="nav__link nav__link_style_bold">Регистрация</NavLink>
            <NavLink to="/signin" className="nav__link nav__link_style_bold nav__link_bg_btn">Войти</NavLink>
          </div>
          </>
      }
    </nav>
  );
}

export default Navigation;
