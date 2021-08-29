import './Profile.css';
import React from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import { useHistory } from "react-router-dom";
import ApiErrors from '../ApiErrors/ApiErrors';

function Profile(props) {
  const {loggedIn, onMenuToggle} = props;
  const currentUser = React.useContext(CurrentUserContext);

  const [nameInput, setNameInput] = React.useState(currentUser.name);
  const [emailInput, setEmailInput] = React.useState(currentUser.email);
  const [editMode, setEditMode] = React.useState(false);
  const [nameValid, setNameValid] = React.useState(true);
  const [emailValid, setEmailValid] = React.useState(true);
  const [formValid, setFormValid] = React.useState(false);
  const [errName, setErrName] = React.useState('none');

  const nameInputElement = React.useRef();
  const emailInputElement = React.useRef();

  const history = useHistory();

  function handleNameInput(e) {
    setNameInput(e.target.value);
    setNameValid(nameInputElement.current.validity.valid);
    setFormValid(nameValid && emailValid);
  }

  function handleEmailInput(e) {
    setEmailInput(e.target.value);
    setEmailValid(emailInputElement.current.validity.valid);
    setFormValid(nameValid && emailValid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrName('update-err');
    setFormValid(false);
  }

  function handleEdit() {
    setEditMode(true);
    console.log(formValid);
  }

  function handleSignOut() {
    history.push('/sign-in');
  }

  return (
    <>
    <Header loggedIn={loggedIn} onMenuToggle={onMenuToggle}/>

    <main>
      <form className="profile" name="profile" onSubmit={handleSubmit} noValidate>
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <div className="profile__input-line">
          <label className="profile__label" for="form-name">Имя</label>
          <input type="text"
                 name="name"
                 id="form-name"
                 minLength="2"
                 maxLength="40"
                 className="profile__input"
                 value={nameInput}
                 onChange={handleNameInput}
                 required
                 disabled={!editMode}
                 ref = {nameInputElement}
            />
        </div>
        <div className="profile__input-line">
          <label className="profile__label" for="form-email">Почта</label>
          <input type="text"
                 name="email"
                 id="form-email"
                 minLength="2"
                 maxLength="40"
                 className="profile__input"
                 value={emailInput}
                 onChange={handleEmailInput}
                 required
                 disabled={!editMode}
                 ref = {emailInputElement}
            />
        </div>
        {!editMode && <button className="profile__edit" onClick={handleEdit}>Редактировать</button>}
        {!editMode && <button className="profile__signout" onClick={handleSignOut}>Выйти из аккаунта</button>}
        {editMode && <ApiErrors errName={errName} className="api-errors_place_profile"/>}
        {editMode && <button className={`profile__submit ${!formValid && 'profile__submit_inactive'}`} type="submit" disabled={!formValid}>Сохранить</button>}
      </form>
    </main>
    </>
  );
}

export default Profile;
