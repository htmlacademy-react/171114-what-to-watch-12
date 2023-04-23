import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import MyListButton from '../../../components/my-list-button/my-list-button';
import PlayButton from '../../../components/play-button/play-button';
import { getPromoStatus } from '../../../store/film-process/selectors';
import { redirectToRoute } from '../../../store/action';
import { AppRoute } from '../../../const';

type PromoCardProps = {
  id: number;
  name: string;
  genre: string;
  released: number;
};

function PromoCard({id, name, genre, released}: PromoCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(getPromoStatus);
  const handlePlayClick = () => {
    dispatch(redirectToRoute(`/player/${id}` as AppRoute));
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
            <MyListButton id={id} isFavorite={isFavorite}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(PromoCard);
