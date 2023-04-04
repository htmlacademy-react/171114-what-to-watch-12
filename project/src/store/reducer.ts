import { createReducer } from '@reduxjs/toolkit';
import {
  renderedFilmsInc,
  renderedFilmsReset,
  filmsCountSet,
  requireAuthorization,
  loadFilms,
  loadFilm,
  loadFilmsSimilar,
  loadComments,
  setFilmsDataLoadingStatus,
  setFilmsSimilarDataLoadingStatus,
  setCommentsDataLoadingStatus,
  setError } from './action';
import { Films, Film, ReviewsProps } from '../types/film-info';
import { FILM_COUNT_PER_STEP, AuthorizationStatus } from '../const';

type InitalState = {
  renderedFilmsCount: number;
  filmsCount: number;
  films: Films;
  film: Film | null;
  filmsSimilar: Films;
  comments: ReviewsProps;
  authorizationStatus: AuthorizationStatus;
  isFilmsDataLoading: boolean;
  isFilmsSimilarDataLoading: boolean;
  isCommentsDataLoading: boolean;
  error: string | null;
}

const inisialState: InitalState = {
  films: [],
  film: null,
  filmsSimilar: [],
  comments: [],
  renderedFilmsCount: 0,
  filmsCount: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
  isFilmsSimilarDataLoading: false,
  isCommentsDataLoading: false,
  error: null,
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
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadFilmsSimilar, (state, action) => {
      state.filmsSimilar = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setFilmsSimilarDataLoadingStatus, (state, action) => {
      state.isFilmsSimilarDataLoading = action.payload;
    })
    .addCase(setCommentsDataLoadingStatus, (state, action) => {
      state.isCommentsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
