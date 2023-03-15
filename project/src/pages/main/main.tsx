import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import { Films } from '../../types/film-info';

type MainProps = {
  films: Films;
};

function Main({films}: MainProps): JSX.Element {
  return (
    <div className="page-content">
      <Helmet>
        <title>What to watch. Main page</title>
      </Helmet>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <NavLink to="/" className="catalog__genres-link">All genres</NavLink>
          </li>
          <li className="catalog__genres-item">
            <NavLink to="/" className="catalog__genres-link">Comedies</NavLink>
          </li>
          <li className="catalog__genres-item">
            <NavLink to="/" className="catalog__genres-link">Crime</NavLink>
          </li>
          <li className="catalog__genres-item">
            <NavLink to="/" className="catalog__genres-link">Documentary</NavLink>
          </li>
          <li className="catalog__genres-item">
            <NavLink to="/" className="catalog__genres-link">Dramas</NavLink>
          </li>
          <li className="catalog__genres-item">
            <NavLink to="/" className="catalog__genres-link">Horror</NavLink>
          </li>
          <li className="catalog__genres-item">
            <NavLink to="/" className="catalog__genres-link">Kids & Family</NavLink>
          </li>
          <li className="catalog__genres-item">
            <NavLink to="/" className="catalog__genres-link">Romance</NavLink>
          </li>
          <li className="catalog__genres-item">
            <NavLink to="/" className="catalog__genres-link">Sci-Fi</NavLink>
          </li>
          <li className="catalog__genres-item">
            <NavLink to="/" className="catalog__genres-link">Thrillers</NavLink>
          </li>
        </ul>

        <FilmsList films={films}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Main;
