import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useCallback } from 'react';
import { getFilteredFilms } from '../../store/films-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import PromoFilm from '../../components/promo-film/promo-film';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import Footer from '../../components/footer/footer';
import {
  filmsCountSet,
  renderedFilmsInc,
  renderedFilmsReset,
  setGenre
} from '../../store/films-process/films-process';
import { useSearchParams } from 'react-router-dom';
import { getFilmsDataLoadingStatus,
  getFilmsCount,
  getFilms,
  getRenderedFilmsCount } from '../../store/films-process/selectors';
import { getPromoLoadingStatus } from '../../store/film-process/selectors';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  const isPromoLoading = useAppSelector(getPromoLoadingStatus);
  const filmsCount = useAppSelector(getFilmsCount);
  const films = useAppSelector(getFilms);
  const filteredFilms = useAppSelector(getFilteredFilms);
  const renderedFilmsCount = useAppSelector(getRenderedFilmsCount);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(setGenre(searchParams.get('genre')));
  }, [searchParams, dispatch]);

  const handleClick = useCallback(
    () => dispatch(renderedFilmsInc()),
    [dispatch]
  );

  useEffect(() => {
    dispatch(filmsCountSet(filteredFilms.length));
  }, [dispatch, filteredFilms]);

  useEffect(() => () => {
    dispatch(renderedFilmsReset());
  }, [dispatch]);

  const renderPromo = () => {
    if(!isPromoLoading) {
      return <PromoFilm />;
    }
  };

  if(isFilmsDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>What to watch. Main page</title>
      </Helmet>
      {renderPromo()}

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>
          <GenresList films={films} genre={searchParams.get('genre')}/>
          <FilmsList filmsFiltered={filteredFilms.slice(0, renderedFilmsCount)} />
          {filmsCount > renderedFilmsCount && (<ShowMore handleClick={handleClick} />)}
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Main;
