import { NavLink, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { MAX_COUNT_OF_GENRE_LIST } from '../../const';

function GenresList(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  const [searchParams] = useSearchParams();

  const genres = films.map((it) => it.genre);
  const uniqueGenres = ['All genres', ...new Set(genres)];

  if(uniqueGenres.length > MAX_COUNT_OF_GENRE_LIST) {
    uniqueGenres.slice(0, MAX_COUNT_OF_GENRE_LIST);
  }

  const setActiveGenre = (genre: string): string => {
    if(!searchParams.has('genre')) {
      return(genre === 'All genres'
        ? 'catalog__genres-item catalog__genres-item--active'
        : 'catalog__genres-item');
    }
    return(searchParams.get('genre') === genre
      ? 'catalog__genres-item catalog__genres-item--active'
      : 'catalog__genres-item');
  };

  return (
    <ul className='catalog__genres-list'>
      {uniqueGenres.map((genre) => (
        <li
          className={setActiveGenre(genre)}
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
