import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useCallback } from 'react';
import { getFilteredFilms } from '../../store/films-process/selectors';
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
import { getFilmsCount,
  getFilms,
  getRenderedFilmsCount,
  getMyList } from '../../store/films-process/selectors';
import { getPromo, getPromoLoadingStatus } from '../../store/film-process/selectors';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const filmInfo = useAppSelector(getPromo);
  const isPromoLoading = useAppSelector(getPromoLoadingStatus);
  const filmsCount = useAppSelector(getFilmsCount);
  const films = useAppSelector(getFilms);
  const filteredFilms = useAppSelector(getFilteredFilms);
  const renderedFilmsCount = useAppSelector(getRenderedFilmsCount);
  const myFilms = useAppSelector(getMyList);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setGenre(searchParams.get('genre'));
    dispatch(renderedFilmsReset());
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
    if(!isPromoLoading && filmInfo) {
      return <PromoFilm name={filmInfo.name} genre={filmInfo.genre} released={filmInfo.released} countOfMyFilms={myFilms.length} />;
    }
  };

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
