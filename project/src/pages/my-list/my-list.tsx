import React from 'react';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import { FilmCards } from '../../types/film-info';

type MyListProps = {
  filmCards: FilmCards;
};

function MyList({filmCards}: MyListProps): JSX.Element {
  return (
    <React.Fragment>
      <Helmet>
        <title>What to watch. My list</title>
      </Helmet>
      <div className="user-page">
        <Header/>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList />
        </section>
        <Footer />
      </div>
    </React.Fragment>

  );
}

export default MyList;
