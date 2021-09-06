import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { CARDS_LIMIT_BIG, WINDOW_SIZE_BIG, CARDS_LIMIT_MIDDLE, CARDS_LIMIT_LITTLE, WINDOW_SIZE_LITTLE} from '../../utils/constants';

function MoviesCardList(props) {
  const { savedAppearance, cards, onCardLike, onCardUnlike, savedMovies, onCardDelete } = props;
  const [limitIndex, setLimitIndex] = React.useState(0);

  function loadMore() {
    setLimitIndex(limitIndex + 4);
  }

    React.useLayoutEffect(() => {
      function updateSize() {
        if (window.innerWidth >= WINDOW_SIZE_BIG) {
            setLimitIndex(CARDS_LIMIT_BIG);
          } else if (window.innerWidth >= WINDOW_SIZE_LITTLE) {
            setLimitIndex(CARDS_LIMIT_MIDDLE);
          } else {
            setLimitIndex(CARDS_LIMIT_LITTLE);
          }
        };
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

 return (
    <section className="cards">
      {savedAppearance
        ? <div className="cards__container section__ultrawide-lmnt">
            {cards.map(item => (
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
                              trailer={/^https:\/\//.test(item.trailerLink) ? item.trailerLink : `https://www.youtube.com/results?search_query=${item.nameRU.trim()}`}
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
