import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { useSearchParams } from 'react-router-dom';
import FilmCard from '../film-card/film-card';
import { FILM_COUNT_PER_STEP } from '../../const';

function FilmsList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const [searchParams] = useSearchParams();
  const [filmsFitered, setFilmsFitered] = useState(films);

  useEffect(() => {
    if(searchParams.get('genre') === null || searchParams.get('genre') === 'All genres') {
      setFilmsFitered(films.slice(0, FILM_COUNT_PER_STEP));
      return;
    }
    setFilmsFitered(films.filter((film) => film.genre === searchParams.get('genre')).slice(0, FILM_COUNT_PER_STEP));

  }, [films, searchParams]);

  return (
    <div className="catalog__films-list">
      { filmsFitered.map((film) => (
        <React.Fragment key={film.id}>
          <FilmCard
            name={film.name}
            previewImage={film.previewImage}
            id={film.id}
            previewVideoLink={film.previewVideoLink}
            genre={film.genre}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default FilmsList;
