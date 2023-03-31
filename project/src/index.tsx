import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {store} from './store';
import {fetchFilmAction, checkAuthAction} from './store/api-actions';

store.dispatch(fetchFilmAction());
store.dispatch(checkAuthAction());

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
    <Provider store = {store}>
      <ErrorMessage />
      <App promoFilmInfo={filmInfo} />
    </Provider>
  </React.StrictMode>,
);

