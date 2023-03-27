import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FilmCardProps } from '../../../types/film-info';

const CardPlayer = ({
  previewVideoLink,
  previewImage,
  name,
  id,
}: Omit<FilmCardProps, 'onSetActiveFilm' | 'activeFilm' | 'genre'>) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.play();
    }
  }, []);

  return (
    <React.Fragment>
      <div className="small-film-card__image">
        <video poster={previewImage} muted width="280" ref={ref} height="175">
          <source src={previewVideoLink} />
        </video>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}/`} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </React.Fragment>
  );
};

export default CardPlayer;
