import './SavedMovies.css';
import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const {loggedIn} = props;

  return (
    <>
    <Header>
      <Navigation loggedIn={loggedIn} />
    </Header>

    <main className="saved-movies">
      <MoviesCardList />
      <MoviesCard />
    </main>

    <Footer />
    </>
  );
}

export default SavedMovies;
