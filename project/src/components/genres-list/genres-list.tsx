import { NavLink } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { useParams } from 'react-router-dom';
import { changeGenre } from '../../store/action';
//import { Genres } from '../../const';

function GenresList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();
  const params = useParams();
  const genres: string[] = ['all'];
  films.forEach((film) => {
    if(!genres.includes(film.genre)) {
      genres.push(film.genre);
    }
  });

  const setActiveGenre = (genre: string): string => {
    if(params.genre === undefined && genre === 'all') {
      return 'catalog__genres-item catalog__genres-item--active';
    }
    if(params.genre === genre ) {
      return 'catalog__genres-item catalog__genres-item--active';
    }
    return 'catalog__genres-item';
  };

  if(params.genre !== undefined) {
    const genre = params.genre;
    dispatch(changeGenre({genre}));
  }

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={setActiveGenre(genre)} key={genre}>
          <NavLink to={`/${genre}/`} className="catalog__genres-link">{genre}</NavLink>
        </li>
      ))}
    </ul>

  );
}

export default GenresList;
