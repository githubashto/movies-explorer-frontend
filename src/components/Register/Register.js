import './Register.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import ApiErrors from '../ApiErrors/ApiErrors';
import { useFormWithValidation } from '../FormValidator/FormValidator';

function Register(props) {
  const {onRegister, apiErrorText} = props;

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({});


  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
    resetForm();
  }

  return (
    <main>
      <section className="register section">
      <form className="account" name="register" onSubmit={handleSubmit} noValidate>
        <div className="account__fields">
        <NavLink to="/">
          <img src={logo} alt="Movies Explorer" className="logo" />
        </NavLink>
        <h1 className="account__title">Добро пожаловать!</h1>
        <label className="account__label" htmlFor="form-name">Имя</label>
        <input type="text"
                name="name"
                id="form-name"
                minLength="2"
                maxLength="30"
                className="account__input"
                value={values.name || ''}
                placeholder="Имя"
                onChange={handleChange}
                required
          />
        <span id="form-name-error" className="account__error">{errors.name}</span>
        <label className="account__label" htmlFor="form-email">E-mail</label>
        <input type="text"
                name="email"
                id="form-email"
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
        <button className={`account__submit ${!isValid ? 'account__submit_inactive' : ''}`} type="submit" disabled={!isValid}>Зарегистрироваться</button>
        <p className="account__note">Уже зарегистрированы? <Link to="/signin" className="account__switch">Войти</Link></p>
        </div>
      </form>
      </section>
    </main>
  );
}

export default Register;
