import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useSearchParams } from 'react-router-dom';
import FilmCard from '../film-card/film-card';
import { filmsCountSet, renderedFilmsReset } from '../../store/action';

function FilmsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.films);
  const renderedFilmsCount = useAppSelector((state) => state.renderedFilmsCount);
  const [searchParams] = useSearchParams();
  const [filmsFitered, setFilmsFitered] = useState(films);

  useEffect(() => {
    if(searchParams.get('genre') === null || searchParams.get('genre') === 'All genres') {
      setFilmsFitered(films.slice(0, renderedFilmsCount));
      dispatch(filmsCountSet({filmsCount: films.length}));
      return;
    }
    setFilmsFitered(films.filter((film) => film.genre === searchParams.get('genre')).slice(0, renderedFilmsCount));
    dispatch(filmsCountSet({filmsCount: films.filter((film) => film.genre === searchParams.get('genre')).length}));
    dispatch(renderedFilmsReset());
  }, [films, searchParams, renderedFilmsCount, dispatch]);

  return (
    <div className="catalog__films-list">
      { filmsFitered.map((film) => (
        <React.Fragment key={film.id}>
          <FilmCard
            name={film.name}
            previewImage={film.previewImage}
            id={film.id}
            previewVideoLink={film.previewVideoLink}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default FilmsList;
