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
import { getFilmsCount, getFilms, getRenderedFilmsCount } from '../../store/films-process/selectors';

const filmInfo = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year:  2014,
  id: 1,
};

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const filmsCount = useAppSelector(getFilmsCount);
  const films = useAppSelector(getFilms);
  const filteredFilms = useAppSelector(getFilteredFilms);
  const renderedFilmsCount = useAppSelector(getRenderedFilmsCount);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setGenre(searchParams.get('genre'));
  }, [searchParams]);

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

  return (
    <React.Fragment>
      <Helmet>
        <title>What to watch. Main page</title>
      </Helmet>
      <PromoFilm name={filmInfo.name} genre={filmInfo.genre} year={filmInfo.year} id={filmInfo.id}/>
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
