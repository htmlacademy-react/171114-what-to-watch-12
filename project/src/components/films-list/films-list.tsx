import React from 'react';
import FilmCard from '../film-card/film-card';
import { Films } from '../../types/film-info';

type FilmsListProps = {
  films: Films;
};

function FilmsList({films}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
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
