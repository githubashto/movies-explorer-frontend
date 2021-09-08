import './SavedMovies.css';
import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const { savedMovies, onSearch, onFilter, onCardDelete } = props;
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(savedMovies);
  const [isShort, setShort] = React.useState(false);
  const [filteredResults, setFilteredResults] = React.useState(savedMovies);

  function handleSearchQuery(query) {
    setSearchQuery(query);
  }

  function handleShortClick(e) {
    setShort(e.target.checked);
  }

  React.useEffect(() => {
    const getResults = async () => {
      const results = await onSearch(savedMovies, searchQuery);
      setSearchResults(results);
    }
    getResults();
  }, [searchQuery, savedMovies]);

  React.useEffect(() => {
    const results = onFilter(searchResults, isShort);
    setFilteredResults(results);
  }, [searchResults, isShort, savedMovies]);

  return (
    <>
    <Header/>

    <main>
      <section className="saved-movies section">
        <SearchForm onSearch={handleSearchQuery} isShort={isShort} onShortClick={handleShortClick}/>
        <MoviesCardList savedAppearance={true}
             cards={filteredResults}
             onCardDelete={onCardDelete}
             savedMovies={savedMovies} />
      </section>
    </main>


    <Footer />
    </>
  );
}

export default SavedMovies;
