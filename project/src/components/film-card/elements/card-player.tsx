import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FilmCardProps } from '../../../types/film-info';
import { None } from '../../../const';

const CardPlayer = ({
  previewVideoLink,
  previewImage,
  name,
  id,
}: FilmCardProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.play();
      ref.current.play().catch((err) =>{
        throw err;
      });
    }
  }, []);

  return (
    <React.Fragment>
      <Link to={`/films/${id}/`} className="small-film-card__image" style={None} >
        <video poster={previewImage} muted width="280" ref={ref} height="175">
          <source src={previewVideoLink} />
        </video>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}/`} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </React.Fragment>
  );
};

export default CardPlayer;
