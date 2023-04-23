import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Header from '../../components/header/header';
import PromoCard from './elements/promo-card';
import PromoNotFound from './elements/promo-not-found';
import { getPromo } from '../../store/film-process/selectors';
import { setFavotite } from '../../store/film-process/film-process';

function PromoFilm(): JSX.Element {
  const filmInfo = useAppSelector(getPromo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFavotite());
  }, [dispatch]);

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      < Header />
      {filmInfo
        ? < PromoCard id={filmInfo.id} name={filmInfo.name} genre={filmInfo.genre} released={filmInfo.released} />
        : < PromoNotFound/>}
    </section>
  );
}
export default React.memo(PromoFilm);
