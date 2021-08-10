import './AboutProject.css';
import React from 'react';

function AboutProject() {
  return (
    <section className="about block section" id="about">
      <h2 className="section__title section__wide-element">О проекте</h2>
      <article className="about__desc section__wide-element">
        <div className="about__paragraph">
          <h4 className="about__subtitle">Дипломный проект включал 5 этапов</h4>
          <p className="section__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about__paragraph">
          <h4 className="about__subtitle">На выполнение диплома ушло 5 недель</h4>
          <p className="section__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </article>
      <div className="about__timeline section__wide-element">
        <div className="about__time about__time_color_green">1 неделя</div>
        <div className="about__time about__time_color_gray">4 недели</div>
        <div className="about__annot">Back-end</div>
        <div className="about__annot">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
