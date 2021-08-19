import './SavedMovies.css';
import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
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

    <main>
      <section classname="movies section">
        <SearchForm />
        <MoviesCardList saved="true" />
      </section>
    </main>


    <Footer />
    </>
  );
}

export default SavedMovies;
