import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import NotFound from '../NotFound/NotFound';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({name: 'Николай',  email: 'astakhayev@yandex.ru'});
  const [overlay, setOverlay] = React.useState(false);

  function handleMenuToggle() {
    setOverlay(!overlay);
  }

  React.useEffect(() => {
    document.addEventListener('onload', (()=> setOverlay(false)));
  });

  return (
    <>
    <div className={overlay ? 'overlay' : ''}/>
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/movies">
          <Movies loggedIn="true" onMenuToggle={handleMenuToggle}/>
        </Route>

        <Route path="/saved-movies">
          <SavedMovies loggedIn="true" onMenuToggle={handleMenuToggle}/>
        </Route>

        <Route path="/profile">
          <Profile loggedIn="true" onMenuToggle={handleMenuToggle}/>
        </Route>

        <Route exact path="/">
          <Main loggedIn={loggedIn} onMenuToggle={handleMenuToggle}/>
        </Route>

        <Route path="">
          <NotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;
