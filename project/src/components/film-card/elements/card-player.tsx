import React from 'react';
import { Link } from 'react-router-dom';
import {FilmCardProps} from '../film-card';

const CardPlayer = ({previewVideoLink, previewImage, name, id, activeFilm}: Omit<FilmCardProps, 'onSetActiveFilm'>) => (
  activeFilm === id
    ?
    <React.Fragment>
      <div className="small-film-card__image" >
        <video
          poster={previewImage}
          autoPlay
          width="280"
          height="175"
        >
          <source src={previewVideoLink}/>
        </video>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}/`} className="small-film-card__link">{name}</Link>
      </h3>
    </React.Fragment>
    :
    <React.Fragment>
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
    </React.Fragment>
);

export default CardPlayer;
