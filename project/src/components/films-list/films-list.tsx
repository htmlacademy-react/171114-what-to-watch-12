import React from 'react';
//import {useState} from 'react';
import SmallCard from '../../components/small-card/small-card';
import { Films } from '../../types/film-info';

type FilmsListProps = {
  films: Films;
};

function FilmsList({films}: FilmsListProps): JSX.Element {
  //const [activeFilm, setActiveFilm] = useState();

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <React.Fragment key={film.id}>
          <SmallCard title={film.title} img={film.img} id={film.id} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default FilmsList;
