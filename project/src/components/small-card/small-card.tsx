
import {Link} from 'react-router-dom';
import { SmallCardProps } from '../../types/film-info';

function SmallCard({title, img, id}: SmallCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={img} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to="/films/:{id}" className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}
export default SmallCard;
