import { createReducer } from '@reduxjs/toolkit';
import { renderedFilmsInc, renderedFilmsReset, filmsCountSet } from './action';
import { films } from '../mocks/film-info';
import { FILM_COUNT_PER_STEP } from '../const';

const inisialState = {
  renderedFilmsCount: Math.min(films.length, FILM_COUNT_PER_STEP),
  filmsCount: films.length,
  films
};

const reducer = createReducer(inisialState, (builder) => {
  builder
    .addCase(renderedFilmsInc, (state) => {
      const filmCount = films.length;
      const newRenderedFilmsCount = Math.min(filmCount, state.renderedFilmsCount + FILM_COUNT_PER_STEP);
      state.renderedFilmsCount = newRenderedFilmsCount;
    })
    .addCase(renderedFilmsReset, (state) => {
      state.renderedFilmsCount = Math.min(films.length, FILM_COUNT_PER_STEP);
    })
    .addCase(filmsCountSet, (state, action) => {
      state.filmsCount = action.payload.filmsCount;
    });
});

export {reducer};
