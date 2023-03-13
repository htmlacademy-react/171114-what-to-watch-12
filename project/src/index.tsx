import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmsCards } from './mocks/film-info';
import { FILM_COUNT_PER_STEP } from './const';

const renderedfilmsCards = filmsCards.slice(0, FILM_COUNT_PER_STEP);

const filmInfo = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year:  2014,
  id: 1,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoFilmInfo={filmInfo} films={renderedfilmsCards} />
  </React.StrictMode>,
);
