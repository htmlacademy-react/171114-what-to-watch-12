import { NavLink } from 'react-router-dom';
import { MAX_COUNT_OF_GENRE_LIST, DEFAULT_GENRE } from '../../const';
import { Films } from '../../types/film-info';

type GenresListProps = {
  films: Films;
  genre: string | null;
};


function GenresList({films, genre}: GenresListProps): JSX.Element {
  const genres = films.map((it) => it.genre);
  const uniqueGenres = [DEFAULT_GENRE, ...new Set(genres)].slice(0, MAX_COUNT_OF_GENRE_LIST);

  const getActiveGenreClassName = (genreName: string): string => {
    if( (! genre && genreName === DEFAULT_GENRE) || genreName === genre) {
      return 'catalog__genres-item catalog__genres-item--active';}
    return 'catalog__genres-item';
  };

  return (
    <ul className='catalog__genres-list'>
      {uniqueGenres.map((genreName) => (
        <li
          className={getActiveGenreClassName(genreName)}
          key={genreName}
        >
          <NavLink to={`?genre=${genreName}`} className='catalog__genres-link'>
            {genreName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
