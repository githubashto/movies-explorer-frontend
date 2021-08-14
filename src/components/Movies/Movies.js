import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Footer/Footer';

function Movies(props) {
  const {loggedIn} = props;
  const [isLoading, setIsLoading] = React.useState(false);

  // React.useEffect(() => {
  //   setIsLoading(true);
  // }, []);

  return (
    <>
    <Header>
      <Navigation loggedIn={loggedIn} />
    </Header>

    <main>
      <section classname="movies section">
        <SearchForm />
        {isLoading
        ? <Preloader />
        : <MoviesCardList />
        }
      </section>
    </main>

    <Footer />
    </>
  );
}

export default Movies;
