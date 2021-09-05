import './SavedMovies.css';
import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const {loggedIn, savedMovies, onSearch} = props;
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([savedMovies]);
  const [isShort, setShort] = React.useState(false);

  function handleSearchQuery(query) {
    setSearchQuery(query);
  }

  function handleShortClick(e) {
    setShort(e.target.checked);
  }

  React.useEffect(() => {
    const results = onSearch(savedMovies, searchQuery);
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <>
    <Header loggedIn={loggedIn}/>

    <main>
      <section className="saved-movies section">
        <SearchForm onSearch={handleSearchQuery} isShort={isShort} onShortClick={handleShortClick}/>
        <MoviesCardList isSaved={true} cards={searchResults} />
      </section>
    </main>


    <Footer />
    </>
  );
}

export default SavedMovies;
