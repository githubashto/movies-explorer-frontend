import './Footer.css';
import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer section">
      <p className="footer__credits">Учебный проект Яндекс.Практикум × BeatFilm.</p>
      <div className="block section__wide-lmnt footer__text">
        <p className="footer__date">© 2021 {year > 2021 && `— ${year}`}</p>
        <ul className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/web/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/githubashto">Github</a>
          <a className="footer__link" href="https://www.facebook.com/nikolay.astakhayev">Facebook</a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
