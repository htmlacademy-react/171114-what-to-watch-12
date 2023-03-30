import React from 'react';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
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
        <Header/>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList filmsFiltered={films.slice(0, 4)}/>
        </section>
        <Footer />
      </div>
    </React.Fragment>

  );
}

export default MyList;
