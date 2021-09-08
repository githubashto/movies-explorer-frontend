import React from 'react';
import './SuccessPopup.css';

function SuccessPopup(props) {
  const {isOpen, onClose} = props;
  return (
    <>
     <section className={`popup ${isOpen === true ? "popup_opened" : ""}`}>
        <figure className="popup__container">
          <button type="button" className="popup__close" onClick={onClose}></button>
          <div className="popup__icon"/>
          <p className="popup__message">Данные сохранены.</p>
        </figure>
      </section>
    </>
  );
}

export default SuccessPopup;
