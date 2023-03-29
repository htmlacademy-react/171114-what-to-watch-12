import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState, useEffect } from 'react';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import Footer from '../../components/footer/footer';
import {
  filmsCountSet,
  renderedFilmsInc,
  renderedFilmsReset,
} from '../../store/action';
import { useSearchParams } from 'react-router-dom';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const films = useAppSelector((state) => state.films);

  const [filmsFiltered, setFilmsFiltered] = useState(films);

  const renderedFilmsCount = useAppSelector(
    (state) => state.renderedFilmsCount
  );

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('genre') === null || searchParams.get('genre') === 'All genres')
    {
      setFilmsFiltered(films);
    } else {
      setFilmsFiltered(
        films.filter((film) => film.genre === searchParams.get('genre')));
    }
  }, [films, searchParams, dispatch]);

  const handleClick = () => {
    dispatch(renderedFilmsInc());
  };

  useEffect(() => {
    dispatch(filmsCountSet({ filmsCount: filmsFiltered.length }));
  }, [filmsFiltered, dispatch]);

  useEffect(() => () => {
    dispatch(renderedFilmsReset());
  }, [dispatch]);

  return (
    <div className='page-content'>
      <Helmet>
        <title>What to watch. Main page</title>
      </Helmet>
      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <GenresList />
        <FilmsList filmsFiltered={filmsFiltered.slice(0, renderedFilmsCount)} />
        {filmsCount > renderedFilmsCount && (<ShowMore handleClick={handleClick} />)}
      </section>
      <Footer />
    </div>
  );
}

export default Main;
