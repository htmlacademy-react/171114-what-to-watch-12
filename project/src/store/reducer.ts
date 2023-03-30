import { createReducer } from '@reduxjs/toolkit';
import { renderedFilmsInc, renderedFilmsReset, filmsCountSet, requireAuthorization, loadFilms } from './action';
import { Films } from '../types/film-info';
import { FILM_COUNT_PER_STEP, AuthorizationStatus } from '../const';

type InitalState = {
  renderedFilmsCount: number;
  filmsCount: number;
  films: Films;
  authorizationStatus: AuthorizationStatus;
}

const inisialState: InitalState = {
  films: [],
  renderedFilmsCount: 0,
  filmsCount: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(inisialState, (builder) => {
  builder
    .addCase(renderedFilmsInc, (state) => {
      const filmCount = state.films.length;
      const newRenderedFilmsCount = Math.min(filmCount, state.renderedFilmsCount + FILM_COUNT_PER_STEP);
      state.renderedFilmsCount = newRenderedFilmsCount;
    })
    .addCase(renderedFilmsReset, (state) => {
      state.renderedFilmsCount = Math.min(state.films.length, FILM_COUNT_PER_STEP);
    })
    .addCase(filmsCountSet, (state, action) => {
      state.filmsCount = action.payload.filmsCount;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filmsCount = state.films.length;
      state.renderedFilmsCount = Math.min(state.films.length, FILM_COUNT_PER_STEP);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
