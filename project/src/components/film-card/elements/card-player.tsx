import { useEffect, useRef } from 'react';
import { FilmCardProps } from '../../../types/film-info';
import { None } from '../../../const';
import { Link } from 'react-router-dom';

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
    <Link to={`/films/${id}/`} className="small-film-card__image" style={None} >
      <video poster={previewImage} muted width="280" ref={ref} height="175">
        <source src={previewVideoLink} />
      </video>
    </Link>
  );
};

export default CardPlayer;
