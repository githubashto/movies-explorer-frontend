import './NotFound.css';
import React from 'react';
import { useHistory } from "react-router-dom";


function NotFound() {
  const history = useHistory();

  return (
    <>
    <main className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__name">Страница не найдена</p>
      <button className="notfound__back" onClick={() => {
        history.goBack();
      }}>Назад</button>
    </main>
    </>
  );
}

export default NotFound;
