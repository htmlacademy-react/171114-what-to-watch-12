import { FilmCards } from '../../types/film-info';
import FilmsList from '../../components/films-list/films-list';

type LikeThisProps = {
  filmCards: FilmCards;
};

function LikeThis({filmCards}: LikeThisProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList/>
    </section>
  );
}

export default LikeThis;
