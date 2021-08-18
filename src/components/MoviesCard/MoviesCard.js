import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
  const {nameRU} = props;

  const image = process.env.PUBLIC_URL + props.image.url;

  const duration = Math.trunc(props.duration/60) + 'ч ' + props.duration % 60 + 'м';

  const [isLiked, setIsLiked] = React.useState(props.isLiked);

  const onCardLike = () => {
    setIsLiked(!isLiked);
  }

  const cardLikeButtonClassName = (
    `card__like ${isLiked && 'card__like_active'}`
  );

  return (
    <article className="card">
      <img src={image} alt={nameRU} className="card__image" />
      <div className="card__caption">
        <h3 className="card__title">{nameRU}</h3>
        <button type="button" className={cardLikeButtonClassName} onClick={onCardLike}></button>
      </div>
      <p className="card__duration">{duration}</p>
    </article>
  );
}

export default MoviesCard;
