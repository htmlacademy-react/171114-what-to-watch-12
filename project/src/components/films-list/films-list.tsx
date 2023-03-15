import React from 'react';
import { useState } from 'react';
import SmallCard from '../../components/small-card/small-card';
import { Films } from '../../types/film-info';

type FilmsListProps = {
  films: Films;
};

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [, /* state */ setActiveFilm] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <React.Fragment key={film.id}>
          <SmallCard
            name={film.name}
            previewImage={film.previewImage}
            id={film.id}
            onSetActiveFilm={() => setActiveFilm(film.id)}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default FilmsList;
