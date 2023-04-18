import React from 'react';
import MyListButton from '../../../components/my-list-button/my-list-button';
import PlayButton from '../../../components/play-button/play-button';

type PromoCardProps = {
  id: number;
  name: string;
  genre: string;
  released: number;
};

function PromoCard({id, name, genre, released}: PromoCardProps): JSX.Element {
  const handlePlayClick = () => {
    window.open(`/player/${id}`, '_blank', 'top=100, left=100, width=800, height=1000');
  };
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <div className="film-card__buttons">
            <PlayButton handleClick={handlePlayClick} />
            <MyListButton id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(PromoCard);
