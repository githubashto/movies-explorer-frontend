import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {
  const {loggedIn, onMenuToggle} = props;
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    <Header loggedIn={loggedIn} onMenuToggle={onMenuToggle}/>

    <main>
      <section className="movies section">
        <SearchForm />
        {isLoading
        ? <Preloader />
        : <MoviesCardList saved="false" />
        }
      </section>
    </main>

    <Footer />
    </>
  );
}

export default Movies;
