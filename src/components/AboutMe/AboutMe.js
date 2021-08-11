import './AboutMe.css';
import React from 'react';
import portrait from '../../images/portrait.png';
import Portfolio from '../Portfolio/Portfolio'

function AboutMe() {
  return (
    <section className="aboutme section" id="about-me">
      <h2 className="section__title section__wide-element">Студент</h2>
      <article className="aboutme__bio section__wide-element">
        <div className="aboutme__narrative">
          <h3 className="aboutme__name">Николай</h3>
          <p className="aboutme__subtitle">Фронтенд-разработчик, 37 лет</p>
          <p className="aboutme__text">Я родился в Шверине, живу в Иркутске, закончил восточный факультет БГУ.
Я люблю слушать музыку, а ещё увлекаюсь чтением. Недавно начал кодить. С 2015 года работал асессором в компании «Яндекс».</p>
          <ul className="aboutme__social">
            <a className="aboutme__social-link" href="https://www.facebook.com/nikolay.astakhayev">Facebook</a>
            <a className="aboutme__social-link" href="https://github.com/githubashto">Github</a>
          </ul>
        </div>
      <img className="aboutme__portrait" src={portrait} alt="Николай Астахаев" />
      </article>

      <Portfolio />
    </section>
  );
}

export default AboutMe;
