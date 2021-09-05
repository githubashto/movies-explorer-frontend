import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {
  const { loggedIn, movies, onSearch, onFilter, onCardLike, savedMovies } = props;
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isShort, setShort] = React.useState(false);
  const [filteredResults, setFilteredResults] = React.useState([]);

  function handleSearchQuery(query) {
    setSearchQuery(query);
  }

  function handleShortClick(e) {
    setShort(e.target.checked);
  }

  React.useEffect(() => {
    const getResults = async () => {
      setIsLoading(true);
      const results = await onSearch(movies, searchQuery);
      setSearchResults(results);
      setIsLoading(false)
    }
    getResults();
  }, [searchQuery]);

  React.useEffect(() => {
    const results = onFilter(searchResults, isShort);
    setFilteredResults(results);
  }, [searchResults, isShort]);

  return (
    <>
    <Header loggedIn={loggedIn}/>

    <main>
      <section className="movies section">
        <SearchForm onSearch={handleSearchQuery} isShort={isShort} onShortClick={handleShortClick} savedMovies={savedMovies}/>
        {searchQuery === ''
          ? <></>
          : <>{isLoading
            ? <Preloader />
            : <MoviesCardList isSaved={false} cards={filteredResults} onCardLike={onCardLike} />
            }
            </>
        }
      </section>
    </main>

    <Footer />
    </>
  );
}

export default Movies;
