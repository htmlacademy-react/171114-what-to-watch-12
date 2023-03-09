import React from 'react';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';

function MyList(): JSX.Element {
  return (
    <React.Fragment>
      <Helmet>
        <title>What to watch. My list</title>
      </Helmet>
      <div className="user-page">
        <Header/>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">

          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>

  );
}

export default MyList;
