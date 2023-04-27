import { Link } from 'react-router-dom';
import { FilmCardProps } from '../../../types/film-info';

const CardPoster = ({previewImage, name, id}: Omit<FilmCardProps, 'previewVideoLink'>) => (
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

);

export default CardPoster;
