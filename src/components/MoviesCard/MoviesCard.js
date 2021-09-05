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
  onLike,
  isLiked,
  onUnlike,
  onDelete,
  _id,
} = props;

  const durationText = Math.trunc(duration/60) + ' ч ' + duration % 60 + ' м';

  const [hasLike, setHasLike] = React.useState(isLiked);

  const cardLikeButtonClassName = (
    `card__like ${hasLike ? 'card__like_active' : ''}`
  );


  function handleDeleteClick() {
    onDelete(_id);
  }

  function handleLikeClick() {
    if (!hasLike) {
      onLike({
        country,
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
    });
    setHasLike(true);
   } else {
      onUnlike(movieId);
      setHasLike(false);
   }
  }

  return (
    <>
    <article className="card">
      <a href={trailer} target="_blank" rel="noreferrer" className="card__picture">
        <img src={image} alt={nameEN === '—' ? nameRU : nameEN} className="card__image" title={`${nameEN} (${country}, ${year}, реж. ${director}). ${description}`} />
      </a>
      <div className="card__caption">
        <h3 className="card__title">{nameRU}</h3>
        {savedAppearance
          ? <button type="button" className="card__unlike" onClick={handleDeleteClick}></button>
          : <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        }
      </div>
      <p className="card__duration">{durationText}</p>
    </article>
    </>
  );
}

export default MoviesCard;
