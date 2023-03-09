import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import SmallCard from '../../components/small-card/small-card';
import Footer from '../../components/footer/footer';

const items = [...Array(20).keys()];

function Main(): JSX.Element {
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

        <div className="catalog__films-list">
          {items.map((it) => (
            <React.Fragment key={it}>
              <SmallCard />
            </React.Fragment>
          ))}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Main;
