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
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function App() {
  const [loggedIn, setLoggedIn] = React.useState();
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isErrorPopupOpen, setErrorPopupOpen] = React.useState(false);
  const [apiErrorText, setApiErrorText] = React.useState('');
  const history = useHistory();

  const closePopup = () => {
    setErrorPopupOpen(false);
  }

  function handleUpdateUser(data) {
    mainApi.patchMe(data)
      .then(result => {
        setCurrentUser(result);
      })
      .catch(err => setApiErrorText(err.message));
  }

  function handleCardLike(card) {
    mainApi.postMovie(card)
      .then(newCard => {
        // const newCards = cards.map(c => c._id === card.id ? newCard : c);
        // setCards(newCards);
        console.log(newCard);
     })
      .catch(err => console.log(err.message))
  }

  function handleCardDelete(card) {
    mainApi.deleteMovie(card.id)
      .then(() => {
        // const newCards = cards.filter(c => c._id !== card.id);
        // setCards(newCards);
     })
     .catch(err => console.log(err.message))
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
        history.push('/movies');
        return;
      })

      .catch(err => setApiErrorText(err.message));
  }

  function handleLogin(data) {
    return mainApi.signIn(data)
      .then(result => {
        localStorage.setItem('jwt', result.token);
        mainApi.getMe()
          .then(result => {
            setLoggedIn(true);
            setCurrentUser(result);
          })
      })
      .finally(history.push('/movies'))

      .catch(err => setApiErrorText(err.message));
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    history.push('/signin');
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getMe()
        .then(result => {
          setLoggedIn(true);
          setCurrentUser(result);
        })
        .catch(err => console.log(err.message))

      mainApi.getMovies()
        .then((res) => setSavedMovies(res))
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
      ? cards.filter(card => card.duration <= 40)
      : cards.filter(card => card.duration > 40);
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
          loggedIn={loggedIn}
          component={Movies}
          movies={movies}
          savedMovies={savedMovies}
          onSearch={filterCardsByQuery}
          onFilter={filterCardsByDuration}
          onCardLike={handleCardLike}
        />

        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          savedMovies={savedMovies}
          onSearch={filterCardsByQuery}
          onFilter={filterCardsByDuration}
        />

        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          onSignOut={handleSignOut}
          onUpdateUser={handleUpdateUser}
          apiErrorText={apiErrorText}
        />

        <Route exact path="/">
          <Main loggedIn={loggedIn}/>
        </Route>

        <Route path="">
          <NotFound />
        </Route>

      </Switch>

      </CurrentUserContext.Provider>

    <ErrorPopup onClose={closePopup} isOpen={isErrorPopupOpen}/>
    </>
  );
}

export default App;
