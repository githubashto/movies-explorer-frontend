import './Portfolio.css';
import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio section__wide-lmnt">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__links">
        <a className="portfolio__link" href="https://github.com/githubashto/how-to-learn"><span className="portfolio__link-text">Статичный сайт</span><span className="portfolio__link-arrow">&#8599;</span></a>
        <a className="portfolio__link" href="https://githubashto.github.io/russian-travel/"><span className="portfolio__link-text">Адаптивный сайт</span><span className="portfolio__link-arrow">&#8599;</span></a>
        <a className="portfolio__link" href="https://nutag.nomoredomains.club/"><span className="portfolio__link-text">Одностраничное приложение</span><span className="portfolio__link-arrow">&#8599;</span></a>
      </ul>
  </div>
  );
}

export default Portfolio;
