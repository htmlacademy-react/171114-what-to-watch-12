import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';

function LikeThis(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList filmsFiltered={films.slice(0, 4)} />
    </section>
  );
}

export default LikeThis;
