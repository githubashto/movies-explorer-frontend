import './Profile.css';
import React from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import ApiErrors from '../ApiErrors/ApiErrors';
import { useFormWithValidation } from '../FormValidator/FormValidator';

function Profile(props) {
  const { onSignOut, onUpdateUser, apiErrorText } = props;
  const currentUser = React.useContext(CurrentUserContext);

  const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
    resetForm();
  }

  React.useEffect(() => {
    setValues({name: currentUser.name, email: currentUser.email});
  }, [currentUser.email, currentUser.name, setValues]);

  return (
    <>
    <Header/>

    <main>
      <section className="profile section">
      <form className="profile__form" name="profile" onSubmit={handleSubmit} noValidate>
        <div className="profile__fields">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <div className="profile__input-line">
            <label className="profile__label" htmlFor="form-name">Имя</label>
            <input type="text"
                 name="name"
                 id="form-name"
                 minLength="2"
                 maxLength="40"
                 className="profile__input"
                 onChange={handleChange}
                 required
                 value={values.name || ''}
              />
          </div>
          <span id="form-name-error" className="profile__error">{errors.name}</span>
          <div className="profile__input-line">
            <label className="profile__label" htmlFor="form-email">Почта</label>
            <input type="text"
                 name="email"
                 id="form-email"
                 minLength="2"
                 maxLength="40"
                 className="profile__input"
                 onChange={handleChange}
                 required
                 value={values.email || ''}
            />
          </div>
          <span id="form-email-error" className="profile__error">{errors.email}</span>
        </div>
        <div className="profile__links">
          <ApiErrors apiErrorText={apiErrorText} className="profile__error"/>
          <button className={`profile__submit ${!isValid ? 'profile__submit_inactive' : ''}`} type="submit" disabled={!isValid}>Редактировать</button>
          <button className="profile__signout" onClick={onSignOut}>Выйти из аккаунта</button>
        </div>
      </form>
      </section>
    </main>
    </>
  );
}

export default Profile;
