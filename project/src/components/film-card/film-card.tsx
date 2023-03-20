import { Link } from 'react-router-dom';
import { Film } from '../../types/film-info';
import cls from './film-card.module.css';
import CardToggle from './elements/card-toggle';

export type FilmCardProps = Film & {
  activeFilm: number | null;
  onSetActiveFilm: (id: number | null) => void;
};

function FilmCard({
  name,
  previewImage,
  id,
  activeFilm,
  previewVideoLink,
  onSetActiveFilm
}: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onSetActiveFilm(id)}
      onMouseLeave={() => onSetActiveFilm(null)}
    >
      <Link
        to={`/films/${id}/`}
        className={cls.wrapper}
      >
        <CardToggle
          name={name}
          previewImage={previewImage}
          previewVideoLink={previewVideoLink}
          id={id}
          activeFilm={activeFilm}
        />
      </Link>
    </article>
  );
}
export default FilmCard;
