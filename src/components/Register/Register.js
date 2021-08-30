import './Register.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import ApiErrors from '../ApiErrors/ApiErrors';

function Register() {
  const [nameInput, setNameInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [nameValid, setNameValid] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const [errName, setErrName] = React.useState('none');
  const [submitted, setSubmitted] = React.useState(false);

  const nameInputElement = React.useRef();
  const emailInputElement = React.useRef();
  const passwordInputElement = React.useRef();

  function handleNameInput(e) {
    setNameInput(e.target.value);
    setNameValid(nameInputElement.current.validity.valid);
    setFormValid(nameValid && emailValid && passwordValid);
  }

  function handleEmailInput(e) {
    setEmailInput(e.target.value);
    setEmailValid(emailInputElement.current.validity.valid);
    setFormValid(nameValid && passwordValid && emailValid);
  }

  function handlePasswordInput(e) {
    setPasswordInput(e.target.value);
    setPasswordValid(passwordInputElement.current.validity.valid);
    setFormValid(nameValid && passwordValid && emailValid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrName('');
    setFormValid(false);
    setSubmitted(true);
  }

  return (
    <main>
      <section className="register section">
      <form className="account" name="register" onSubmit={handleSubmit} noValidate>
        <NavLink to="/">
          <img src={logo} alt="Movies Explorer" className="logo" />
        </NavLink>
        <h1 className="account__title">Добро пожаловать!</h1>
        <label className="account__label" for="form-name">Имя</label>
        <input type="text"
               name="name"
               id="form-name"
               minLength="2"
               maxLength="40"
               className="account__input"
               value={nameInput}
               placeholder="Имя"
               onChange={handleNameInput}
               required
               ref = {nameInputElement}
          />
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
        <button className={`account__submit ${!formValid ? 'account__submit_inactive' : ''}`} type="submit" disabled={!formValid}>Зарегистрироваться</button>
        <p className="account__note">Уже зарегистрированы? <NavLink to="/signin" className="account__switch">Войти</NavLink></p>
      </form>
      </section>
    </main>
  );
}

export default Register;
