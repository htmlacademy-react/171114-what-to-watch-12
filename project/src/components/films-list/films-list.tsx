import React from 'react';
import FilmCard from '../film-card/film-card';
import { FilmCards } from '../../types/film-info';

type FilmsListProps = {
  filmCards: FilmCards;
};

function FilmsList({filmCards}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {filmCards.map((film) => (
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
