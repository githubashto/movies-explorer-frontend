import './Login.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import ApiErrors from '../ApiErrors/ApiErrors';

function Login() {
  const [emailInput, setEmailInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const [errName, setErrName] = React.useState('none');
  const [submitted, setSubmitted] = React.useState(false);

  const emailInputElement = React.useRef();
  const passwordInputElement = React.useRef();

  function handleEmailInput(e) {
    setEmailInput(e.target.value);
    setEmailValid(emailInputElement.current.validity.valid);
    setFormValid(passwordValid && emailValid);
  }

  function handlePasswordInput(e) {
    setPasswordInput(e.target.value);
    setPasswordValid(passwordInputElement.current.validity.valid);
    setFormValid(passwordValid && emailValid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrName('');
    setFormValid(false);
    setSubmitted(true);
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
          <label className="account__label" for="form-email">E-mail</label>
          <input type="text"
                name="email"
                id="form-email"
                minLength="2"
                maxLength="40"
                className="account__input"
                value={emailInput}
                placeholder="Почта"
                onChange={handleEmailInput}
                required
                ref = {emailInputElement}
          />
          <label className="account__label" for="form-password">Пароль</label>
          <input type="password"
                name="name"
                id="form-password"
                minLength="2"
                maxLength="40"
                className="account__input"
                value={passwordInput}
                placeholder="Пароль"
                onChange={handlePasswordInput}
                required
                ref = {passwordInputElement}
          />
        {submitted && <ApiErrors errName={errName} className="api-errors_place_account"/>}
        </div>
        <div className="account__links">
        <button className={`account__submit ${!formValid ? 'account__submit_inactive' : ''}`} type="submit" disabled={!formValid}>Войти</button>
        <p className="account__note">Ещё не зарегистрированы? <NavLink to="/signup" className="account__switch">Регистрация</NavLink></p>
        </div>
      </form>
      </section>
    </main>
  );
}

export default Login;
