import { Films } from '../../types/film-info';
import FilmsList from '../../components/films-list/films-list';

type LikeThisProps = {
  films: Films;
};

function LikeThis({films}: LikeThisProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList films={films}/>
    </section>
  );
}

export default LikeThis;
