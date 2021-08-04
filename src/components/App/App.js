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
  return (
    <div className="root">
      <Switch>
            <Route path="/signup">
              <Register />
            </Route>

            <Route path="/signin">
              <Login />
            </Route>

            <Route path="/movies">
              <Movies />
            </Route>

            <Route path="/saved-movies">
              <SavedMovies />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/">
              <Main />
            </Route>

          </Switch>
    </div>
  );
}

export default App;
