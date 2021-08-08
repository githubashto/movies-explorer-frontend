import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register  from '../Register/Register';
import Login from '../Login/Login';
import Profile  from '../Profile/Profile';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Switch>
      <Route path="/signup">
        <Register />
      </Route>

      <Route path="/signin">
        <Login />
      </Route>

      <Route path="/movies">
        <Movies loggedIn={loggedIn} />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies loggedIn={loggedIn} />
      </Route>

      <Route path="/profile">
        <Profile loggedIn={loggedIn} />
      </Route>

      <Route path="/">
        <Main loggedIn={loggedIn} />
      </Route>

    </Switch>
  );
}

export default App;
