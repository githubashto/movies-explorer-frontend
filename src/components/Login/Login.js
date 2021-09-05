import './Login.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import ApiErrors from '../ApiErrors/ApiErrors';
import { useFormWithValidation } from '../FormValidator/FormValidator';

function Login(props) {
  const {onLogin, apiErrorText} = props;

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
    resetForm();
  }

  return (
    <main>
      <section className="login section">
      <form className="account" name="login" onSubmit={handleSubmit} noValidate>
        <div className="account__fields">
        <NavLink to="/">
          <img src={logo} alt="Movies Explorer" className="logo"/>
        </NavLink>
        <h1 className="account__title">Рады видеть!</h1>
          <label className="account__label" htmlFor="form-email">E-mail</label>
          <input type="text"
                name="email"
                id="form-email"
                minLength="2"
                maxLength="40"
                className="account__input"
                value={values.email || ''}
                placeholder="Почта"
                onChange={handleChange}
                required
          />
          <span id="form-email-error" className="account__error">{errors.email}</span>
          <label className="account__label" htmlFor="form-password">Пароль</label>
          <input type="password"
                name="password"
                id="form-password"
                className="account__input"
                value={values.password || ''}
                placeholder="Пароль"
                onChange={handleChange}
                required
          />
          <span id="form-password-error" className="account__error">{errors.password}</span>
        </div>
        <div className="account__links">
          <ApiErrors apiErrorText={apiErrorText} className="account__error"/>
          <button className={`account__submit ${!isValid ? 'account__submit_inactive' : ''}`} type="submit" disabled={!isValid}>Войти</button>
          <p className="account__note">Еще не зарегистрированы? <Link to="/signup" className="account__switch">Регистрация</Link></p>
        </div>
      </form>
      </section>
    </main>
  );
}

export default Login;
