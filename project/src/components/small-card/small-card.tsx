import { Link } from 'react-router-dom';
import { Film } from '../../types/film-info';

export type SmallCardProps = Film & {
  onSetActiveFilm: (id: number | null) => void;
};

function SmallCard({
  name,
  previewImage,
  id,
  onSetActiveFilm
}: SmallCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onSetActiveFilm(id)}
      onMouseLeave={() => onSetActiveFilm(null)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}/overview`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}
export default SmallCard;
