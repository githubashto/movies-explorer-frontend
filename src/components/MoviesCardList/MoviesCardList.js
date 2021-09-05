import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const { savedAppearance, cards, onCardLike, onCardUnlike, savedMovies, onCardDelete } = props;
  const [limitIndex, setLimitIndex] = React.useState(0);

  function loadMore() {
    setLimitIndex(limitIndex + 4);
  }

    React.useLayoutEffect(() => {
      function updateSize() {
        if (window.innerWidth >= 1024) {
            setLimitIndex(4);
          } else if (window.innerWidth >= 551) {
            setLimitIndex(3);
          } else {
            setLimitIndex(5);
          }
        };
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

  // React.useEffect(() => {
  //   useWindowSize();
  // }, []);

  // function defineLimit() {
  //   // const width = useWindowSize();
  //   if (width >= 1024) {
  //     setLimitIndex(4);
  //   } else if (width >= 551) {
  //     setLimitIndex(3);
  //   } else {
  //     setLimitIndex(1);
  //   }
  // }

 return (
    <section className="cards">
      {savedAppearance
        ? <div className="cards__container section__ultrawide-lmnt">
            {cards.slice(0, limitIndex).map(item => (
              <MoviesCard key={item._id}
                          {...item}
                          savedAppearance={savedAppearance}
                          onDelete={onCardDelete}
              />
            ))}
          </div>
        : <>{cards.length === 0
            ? <p className="cards__no">Ничего не найдено.</p>
            : <>
              <div className="cards__container section__ultrawide-lmnt">
                {cards.slice(0, limitIndex).map(item => (
                  <MoviesCard key={item.id}
                              country={item.country ? item.country : '—'}
                              director={item.director ? item.director.trim() : '—'}
                              duration={item.duration}
                              year={item.year}
                              description={item.description.trim()}
                              image={`https://api.nomoreparties.co${item.image.url}`}
                              trailer={/^https:\/\//.test(item.trailerLink) ? item.trailerLink : `https://yandex.ru/video/search?text=${item.nameRU.trim()}`}
                              movieId={item.id}
                              nameRU={item.nameRU.trim()}
                              nameEN={item.nameEN ? item.nameEN.trim() : '—'}
                              thumbnail={`https://api.nomoreparties.co${item.image.formats.thumbnail.url}`}
                              savedAppearance={savedAppearance}
                              onLike={onCardLike}
                              onUnlike={onCardUnlike}
                              isLiked={savedMovies.some(card => card.movieId === item.id)}
                  />
                ))}
              </div>
              {cards.length > limitIndex
                ? <button className="cards__load" onClick={loadMore}>Ещё</button>
                : <></>
              }
          </>
        }
     </>
    }
    </section>
  );
}

export default MoviesCardList;
