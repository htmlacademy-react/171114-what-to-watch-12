import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import Footer from '../../components/footer/footer';
import { FilmCards } from '../../types/film-info';

type MainProps = {
  filmCards: FilmCards;
};

function Main({filmCards}: MainProps): JSX.Element {
  return (
    <div className="page-content">
      <Helmet>
        <title>What to watch. Main page</title>
      </Helmet>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />
        <FilmsList filmCards={filmCards}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Main;
