import './SavedMovies.css';
import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const {loggedIn, onMenuToggle} = props;

  return (
    <>
    <Header loggedIn={loggedIn} onMenuToggle={onMenuToggle}/>

    <main>
      <section className="saved-movies section">
        <SearchForm />
        <MoviesCardList saved="true" />
      </section>
    </main>


    <Footer />
    </>
  );
}

export default SavedMovies;
