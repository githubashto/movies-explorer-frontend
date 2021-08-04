import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Movies() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
      <Footer />
    </main>
  );
}

export default Movies;
