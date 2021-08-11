import './AboutMe.css';
import React from 'react';
import portrait from '../../images/portrait.png';

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

      <div className="aboutme__portfolio section__wide-element">
        <h4 className="aboutme__portfolio-title">Портфолио</h4>
        <ul className="aboutme__links">
          <a className="aboutme__link" href="https://github.com/githubashto/how-to-learn"><span className="aboutme__linktext">Статичный сайт</span><span className="aboutme__linkarrow">↗</span></a>
          <a className="aboutme__link" href="https://githubashto.github.io/russian-travel/"><span className="aboutme__linktext">Адаптивный сайт</span><span className="aboutme__linkarrow">↗</span></a>
          <a className="aboutme__link" href="https://nutag.nomoredomains.club/"><span className="aboutme__linktext">Одностраничное приложение</span><span className="aboutme__linkarrow">↗</span></a>
        </ul>
      </div>

    </section>
  );
}

export default AboutMe;
