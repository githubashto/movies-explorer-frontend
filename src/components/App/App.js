import './App.css';
import React from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import NotFound from '../NotFound/NotFound';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import {SHORT_DURATION} from '../../utils/constants';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [apiErrorText, setApiErrorText] = React.useState('');
  const history = useHistory();

  const closePopup = () => {
    setPopupOpen(false);
  }

  function handleUpdateUser(data) {
    mainApi.patchMe(data)
      .then(result => {
        setPopupOpen(true);
        setCurrentUser(result);
      })
      .catch(err => setApiErrorText(err.message));
  }

  function handleCardLike(card) {
    mainApi.postMovie(card)
      .then(res => {
        let newSavedMovies = [...savedMovies];
        newSavedMovies.push(res);
        setSavedMovies(newSavedMovies);
      })
    .catch(err => console.log(err.message));
  }

  function handleCardDelete(cardId) {
    mainApi.deleteMovie(cardId)
      .then(res => {
        const deletedCardIndex = savedMovies.findIndex(card => card._id === cardId);
        let newSavedMovies = [...savedMovies];
        newSavedMovies.splice(deletedCardIndex, 1);
        setSavedMovies(newSavedMovies);
      })
     .catch(err => console.log(err.message))
  }

  function handleUnlike(movieId) {
    console.log(movieId);
    if (savedMovies.length > 0) {
      let cardId = savedMovies.find(card => card.movieId === movieId)._id;
      console.log(cardId);
      handleCardDelete(cardId);
    }
  }

  function getMovies() {
      if (localStorage.getItem('storedMovies')) {
        setMovies(JSON.parse(localStorage.getItem('storedMovies')));
    } else moviesApi.getMovies()
      .then((res) => {
        localStorage.setItem('storedMovies', JSON.stringify(res));
        setMovies(res);
      })
      .catch(err => console.log(err.message))
  }

  function handleRegister(data) {
    return mainApi.signUp(data)
      .then(result => {
        handleLogin({email: result.email, password: data.password});
        return;
      })

      .catch(err => setApiErrorText(err.message));
  }

  function handleLogin(data) {
    return mainApi.signIn(data)
      .then(result => {
        localStorage.setItem('jwt', result.token);
      })
      .then(() => {
        mainApi.getMe()
          .then(result => {
            setCurrentUser(result);
          })
          .finally(history.push('./movies'))
          .catch(err => console.log(err.message))
        })
      .catch(err => setApiErrorText(err.message));
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setCurrentUser({});
    setSavedMovies([]);
    history.push('/signin');
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getMe()
        .then(result => {
          setCurrentUser(result);
        })
        .catch(err => {
          console.log(err.message);
          history.push('/signin');
        })

      mainApi.getMovies()
        .then((res) => {
          setSavedMovies(res);
        }
          )
        .catch(err => console.log(err.message))
      }
  }

  function filterCardsByQuery(cards, query) {
    const terms = query.toLowerCase().trim().split(' ');

    const results = cards.filter(card => {
      const text = [
              card.nameRU,
              card.nameEN,
              card.description,
              card.country,
              card.director,
              card.year
            ].filter(Boolean).join(", ").toLowerCase();

      return terms.every(term => {
        if (text.includes(term)) {
          return true;
        }
       return false;
      });
    });
    return results;
  }

  function filterCardsByDuration(cards, isShort) {
    const results = isShort
      ? cards.filter(card => card.duration <= SHORT_DURATION)
      : cards.filter(card => card.duration > SHORT_DURATION);
    return results;
  }

  React.useEffect(() => {
    tokenCheck();
    getMovies();
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>

      <Switch>
        <Route path="/signup">
          <Register onRegister={handleRegister} apiErrorText={apiErrorText}/>
        </Route>

        <Route path="/signin">
          <Login onLogin={handleLogin} apiErrorText={apiErrorText}/>
        </Route>

        <ProtectedRoute
          path="/movies"
          component={Movies}
          movies={movies}
          savedMovies={savedMovies}
          onSearch={filterCardsByQuery}
          onFilter={filterCardsByDuration}
          onCardLike={handleCardLike}
          onCardUnlike={handleUnlike}
        />

        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          savedMovies={savedMovies}
          onSearch={filterCardsByQuery}
          onFilter={filterCardsByDuration}
          onCardDelete={handleCardDelete}
        />

        <ProtectedRoute
          path="/profile"
          component={Profile}
          onSignOut={handleSignOut}
          onUpdateUser={handleUpdateUser}
          apiErrorText={apiErrorText}
        />

        <Route exact path="/">
          <Main/>
        </Route>

        <Route path="">
          <NotFound />
        </Route>

      </Switch>

      </CurrentUserContext.Provider>

    <SuccessPopup onClose={closePopup} isOpen={isPopupOpen}/>
    </>
  );
}

export default App;
