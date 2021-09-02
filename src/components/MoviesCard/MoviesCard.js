import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
  const {nameRU, saved} = props;

  const image = process.env.PUBLIC_URL + props.image.url;

  const duration = Math.trunc(props.duration/60) + ' ч ' + props.duration % 60 + ' м';

  const [isLiked, setIsLiked] = React.useState(props.isLiked);

  const [visible, setVisible] = React.useState(true);

  const onCardLike = () => {
    setIsLiked(!isLiked);
  }

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
      <img src={image} alt={nameRU} className="card__image" />
      <div className="card__caption">
        <h3 className="card__title">{nameRU}</h3>
        {saved === "true"
          ? <button type="button" className="card__unlike" onClick={onCardDelete}></button>
          : <button type="button" className={cardLikeButtonClassName} onClick={onCardLike}></button>
        }
      </div>
      <p className="card__duration">{duration}</p>
    </article>
    : <></>
    }
     </>
  );
}

export default MoviesCard;
