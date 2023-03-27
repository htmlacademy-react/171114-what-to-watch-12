import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { useSearchParams } from 'react-router-dom';
import FilmCard from '../film-card/film-card';
import { FILM_COUNT_PER_STEP } from '../../const';

function FilmsList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const filmCards = Array.from(films, (film) => {const name = film.name; const previewImage = film.previewImage; const previewVideoLink = film.previewVideoLink; const id = film.id; const genre = film.genre;
    return({name, previewImage, previewVideoLink, id, genre});});
  const [searchParams] = useSearchParams();
  const genre = searchParams.get('genre');
  const [currentGenre, setCurrentGenre] = useState('All genres');

  useEffect(() => {
    if(currentGenre !== genre && genre !== null) {
      setCurrentGenre(genre);
    }
  }, [genre, currentGenre]);

  let filmCardsFilter = [...filmCards];

  if(currentGenre !== null || currentGenre !== 'All genres') {
    filmCardsFilter = filmCards.filter((film) => film.genre === currentGenre).slice(0, FILM_COUNT_PER_STEP);
  }
  if(currentGenre === 'All genres') {
    filmCardsFilter = filmCards.slice(0, FILM_COUNT_PER_STEP);
  }
  if(currentGenre === null) {
    filmCardsFilter = filmCards.slice(0, FILM_COUNT_PER_STEP);
  }

  return (
    <div className="catalog__films-list">
      { filmCardsFilter.map((film) => (
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
