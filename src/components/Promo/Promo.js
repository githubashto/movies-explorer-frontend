import './Promo.css';
import React from 'react';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className="promo section">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <NavTab />
    </section>
  );
}

export default Promo;
