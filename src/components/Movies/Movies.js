import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Footer/Footer';

function Movies(props) {
  const {loggedIn} = props;

  return (
    <>
    <Header>
      <Navigation loggedIn={loggedIn} />
    </Header>

    <main classname="movies">
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
    </main>

    <Footer />
    </>
  );
}

export default Movies;
