import './SavedMovies.css';
import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function SavedMovies() {
  return (
    <main>
      <Header />
      <MoviesCardList />
      <MoviesCard />
      <Footer />
    </main>
  );
}

export default SavedMovies;
