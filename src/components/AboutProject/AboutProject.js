import './AboutProject.css';
import React from 'react';

function AboutProject() {
  return (
    <section className="project section" id="project">
      <h2 className="section__title section__wide-lmnt">О&nbsp;проекте</h2>
      <article className="project__desc section__wide-lmnt">
        <div className="project__paragraph">
          <h4 className="project__subtitle">Дипломный проект включал 5&nbsp;этапов</h4>
          <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </div>
        <div className="project__paragraph">
          <h4 className="project__subtitle">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h4>
          <p className="project__text">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </article>
      <div className="project__timeline section__wide-lmnt">
        <div className="project__time project__time_color_green">1&nbsp;неделя</div>
        <div className="project__time project__time_color_gray">4&nbsp;недели</div>
        <div className="project__annot">Back-end</div>
        <div className="project__annot">Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
