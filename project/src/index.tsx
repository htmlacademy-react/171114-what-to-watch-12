import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FilmCardProps } from './types/film-info';

const filmInfo: FilmCardProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year:  2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App {...filmInfo} />
  </React.StrictMode>,
);
