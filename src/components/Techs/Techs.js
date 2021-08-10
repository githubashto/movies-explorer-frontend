import './Techs.css';
import React from 'react';

function Techs() {
  return (
    <section className="techs block section" id="techs">
      <h2 className="section__title section__wide-element">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="section__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__name">HTML</li>
        <li className="techs__name">CSS</li>
        <li className="techs__name">JS</li>
        <li className="techs__name">React</li>
        <li className="techs__name">Git</li>
        <li className="techs__name">Express.js</li>
        <li className="techs__name">mongoDB</li>
      </ul>

    </section>
  );
}

export default Techs;
