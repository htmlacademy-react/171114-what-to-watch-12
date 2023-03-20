import React from 'react';
import { Link } from 'react-router-dom';
import {FilmCardProps} from '../film-card';

const CardPoster = ({previewImage, name, id}: Omit<FilmCardProps, 'previewVideoLink' | 'onSetActiveFilm' | 'activeFilm'>) => (
  <>
    <div className="small-film-card__image">
      <img
        alt={name}
        src={previewImage}
        width="280"
        height="175"
      />
    </div>
    <h3 className="small-film-card__title">
      <Link to={`/films/${id}/`} className="small-film-card__link">{name}</Link>
    </h3>
  </>
);

export default CardPoster;