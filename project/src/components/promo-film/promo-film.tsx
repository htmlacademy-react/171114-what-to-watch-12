import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
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

  const renderPromo = (): JSX.Element => {
    if(filmInfo) {
      return (
        <PromoCard id={filmInfo.id}
          name={filmInfo.name}
          genre={filmInfo.genre}
          released={filmInfo.released}
          backgroundImage={filmInfo.backgroundImage}
          posterImage={filmInfo.posterImage}
        />);
    } else {
      return <PromoNotFound/>;
    }
  };

  return (
    <React.Fragment>
      {renderPromo()}
    </React.Fragment>
  );
}
export default React.memo(PromoFilm);
