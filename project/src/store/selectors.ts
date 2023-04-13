import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';

const getFilms = (state: State) => state.films;
const getGenre = (state: State) => state.genre;

export const getFilteredFilms = () => createSelector(
  [getFilms, getGenre],
  (films, genre) => {
    if (genre === null || genre === 'All genres') {
      return films;
    } else {
      return films.filter((film) => film.genre === genre);
    }
  }
);
