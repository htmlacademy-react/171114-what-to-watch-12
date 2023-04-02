import React from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/header/elements/user-block';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';

function MyList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <React.Fragment>
      <Helmet>
        <title>What to watch. My list</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
          <UserBlock/>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList filmsFiltered={films.slice(0, 9)}/>
        </section>
        <Footer />
      </div>
    </React.Fragment>

  );
}

export default MyList;
