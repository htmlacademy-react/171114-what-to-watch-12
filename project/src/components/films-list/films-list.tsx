import React from 'react';
import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { Films } from '../../types/film-info';

type FilmsListProps = {
  films: Films;
};

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <React.Fragment key={film.id}>
          <FilmCard
            name={film.name}
            previewImage={film.previewImage}
            id={film.id}
            activeFilm={activeFilm}
            previewVideoLink={film.previewVideoLink}
            onSetActiveFilm={() => setActiveFilm(film.id)}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default FilmsList;
