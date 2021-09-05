import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
  const {country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  movieId,
  nameRU,
  nameEN,
  thumbnail,
  savedAppearance,
  onLike
} = props;

  const durationText = Math.trunc(duration/60) + ' ч ' + duration % 60 + ' м';

  const [isLiked, setIsLiked] = React.useState(false);

  const [visible, setVisible] = React.useState(true);

  // const onCardLike = () => {
  //   setIsLiked(!isLiked);
  // }

  const onCardDelete = () => {
    setVisible(false);
  }

  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
  );

  return (
    <>
    {visible
    ? <article className="card">
      <a href={trailer} target="_blank" rel="noreferrer" className="card__picture">
        <img src={image} alt={nameEN === '—' ? nameRU : nameEN} className="card__image" title={`${nameEN} (${country}, ${year}, реж. ${director}). ${description}`} />
      </a>
      <div className="card__caption">
        <h3 className="card__title">{nameRU}</h3>
        {savedAppearance
          ? <button type="button" className="card__unlike" onClick={onCardDelete}></button>
          : <button type="button" className={cardLikeButtonClassName} onClick={onLike}></button>
        }
      </div>
      <p className="card__duration">{durationText}</p>
    </article>
    : <></>
    }
     </>
  );
}

export default MoviesCard;
