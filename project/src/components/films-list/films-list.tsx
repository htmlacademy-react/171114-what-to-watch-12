import React from 'react';
import FilmCard from '../film-card/film-card';
import { Films } from '../../types/film-info';

function FilmsList({ filmsFiltered }: { filmsFiltered: Films }): JSX.Element {
  return (
    <div className='catalog__films-list'>
      {filmsFiltered.map((film) => (
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
