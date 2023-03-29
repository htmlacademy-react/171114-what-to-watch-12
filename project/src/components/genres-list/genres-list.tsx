import { NavLink, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { MAX_COUNT_OF_GENRE_LIST } from '../../const';

function GenresList(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  const [searchParams] = useSearchParams();

  const genres = films.map((it) => it.genre);
  const uniqueGenres = ['All genres', ...new Set(genres)].slice(0, MAX_COUNT_OF_GENRE_LIST);

  const getActiveGenreClassName = (genre: string): string => {
    const genreFromURL = searchParams.has('genre');
    if( (! genreFromURL && genre === 'All genres') || searchParams.get('genre') === genre) {
      return 'catalog__genres-item catalog__genres-item--active';}
    return 'catalog__genres-item';
  };

  return (
    <ul className='catalog__genres-list'>
      {uniqueGenres.map((genre) => (
        <li
          className={getActiveGenreClassName(genre)}
          key={genre}
        >
          <NavLink to={`?genre=${genre}`} className='catalog__genres-link'>
            {genre}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
