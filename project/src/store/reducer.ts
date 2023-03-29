import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, listGenre } from './action';
import { films } from '../mocks/film-info';
//import { FILM_COUNT_PER_STEP } from '../const';

const inisialState = {
  genre: 'all',
  films
};

const reducer = createReducer(inisialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(listGenre, (state) => {
      films.filter((film) => film.genre === state.genre);
    });
});

export {reducer};
