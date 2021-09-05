import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import ApiErrors from '../ApiErrors/ApiErrors';

function MoviesCardList(props) {
  const { savedAppearance, cards, onCardLike, savedMovies } = props;
  const [limitIndex, setLimitIndex] = React.useState(4);

  // const cards = [
  //   {id: 1, nameRU: '33 слова о дизайне', duration: 102, image: {url: './card1.png'}, isLiked: true },
  //   {id: 2, nameRU: 'Киноальманах «100 лет дизайна»', duration: 102, image: {url: './card2.png'}, isLiked: false },
  //   {id: 3, nameRU: 'В погоне за Бэнкси', duration: 102, image: {url: './card3.png'}, isLiked: false },
  //   {id: 4, nameRU: 'Баския: Взрыв реальности', duration: 102, image: {url: './card4.png'}, isLiked: false },
  //   {id: 5, nameRU: 'Бег это свобода', duration: 102, image: {url: './card5.png'}, isLiked: true },
  //   {id: 6, nameRU: 'Книготорговцы', duration: 102, image: {url: './card6.png'}, isLiked: true },
  //   {id: 7, nameRU: 'Когда я думаю о Германии ночью', duration: 102, image: {url: './card7.png'}, isLiked: false },
  //   {id: 8, nameRU: 'Gimme Danger: История Игги и The Stooges', duration: 102, image: {url: './card8.png'}, isLiked: false },
  //   {id: 9, nameRU: 'Дженис: Маленькая девочка грустит', duration: 102, image: {url: './card9.png'}, isLiked: false },
  //   {id: 10, nameRU: 'Соберись перед прыжком', duration: 102, image: {url: './card10.png'}, isLiked: false },
  //   {id: 11, nameRU: 'Пи Джей Харви: A dog called money', duration: 102, image: {url: './card11.png'}, isLiked: false },
  //   {id: 12, nameRU: 'По волнам: Искусство звука в кино', duration: 102, image: {url: './card12.png'}, isLiked: false },
  //   {id: 13, nameRU: 'Рудбой', duration: 102, image: {url: './card13.png'}, isLiked: false },
  //   {id: 14, nameRU: 'Скейт — кухня', duration: 102, image: {url: './card14.png'}, isLiked: false },
  //   {id: 15, nameRU: 'Война искусств', duration: 102, image: {url: './card15.png'}, isLiked: false },
  //   {id: 16, nameRU: 'Зона', duration: 102, image: {url: './card16.png'}, isLiked: false },
  // ];

  // let savedCards = cards.filter(function(card) {
  //   return card.isLiked === true;
  // });

  function loadMore() {
    setLimitIndex(limitIndex + 4);
  }

 return (
    <section className="cards">
      {cards.length === 0
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
            trailer={item.trailerLink ? item.trailerLink : `https://yandex.ru/video/search?text=${item.nameRU.trim()}`}
            movieId={item.id}
            nameRU={item.nameRU.trim()}
            nameEN={item.nameEN ? item.nameEN.trim() : '—'}
            thumbnail={`https://api.nomoreparties.co${item.image.formats.thumbnail.url}`}
            savedAppearance={savedAppearance}
            onLike={onCardLike}
            />
          ))}
        </div>
        {cards.length > limitIndex
          ? <button className="cards__load" onClick={loadMore}>Ещё</button>
          : <></>
        }
        </>
    }
    </section>
  );
}

export default MoviesCardList;
