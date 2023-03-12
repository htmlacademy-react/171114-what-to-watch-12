import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/film-info';

const filmInfo = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year:  2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoFilmInfo={filmInfo} films={films} />
  </React.StrictMode>,
);
