import React from 'react';
import './ErrorPopup.css';

function ErrorPopup(props) {
  const {isOpen, onClose} = props;
  return (
    <>
     <section className={`popup ${isOpen === true ? "popup_opened" : ""}`}>
        <figure className="popup__container">
          <button type="button" className="popup__close" onClick={onClose}></button>
          <div className="popup__icon"/>
          <p className="popup__message">Что-то пошло не так! Попробуйте ещё раз.</p>
        </figure>
      </section>
    </>
  );
}

export default ErrorPopup;
