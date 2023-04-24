import React from 'react';
import { Link } from 'react-router-dom';
import { FilmCardProps } from '../../../types/film-info';

const CardPoster = ({previewImage, name, id}: Omit<FilmCardProps, 'previewVideoLink'>) => (
  <React.Fragment>
    <Link to={`/films/${id}/`}>
      <div className="small-film-card__image">
        <img
          alt={name}
          src={previewImage}
          width="280"
          height="175"
        />
      </div>
    </Link>
    <h3 className="small-film-card__title">
      <Link to={`/films/${id}/`} className="small-film-card__link">{name}</Link>
    </h3>
  </React.Fragment>

);

export default CardPoster;
