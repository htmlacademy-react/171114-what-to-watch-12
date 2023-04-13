import { createReducer } from '@reduxjs/toolkit';
import {
  renderedFilmsInc,
  renderedFilmsReset,
  filmsCountSet,
  loadFilms,
  setGenre,
  loadFilm,
  loadFilmsSimilar,
  loadComments,
  setFilmsDataLoadingStatus,
  setFilmsSimilarDataLoadingStatus,
  setCommentsDataLoadingStatus } from './action';
import { Films, Film, ReviewsProps } from '../types/film-info';
import { FILM_COUNT_PER_STEP } from '../const';

type InitalState = {
  renderedFilmsCount: number;
  filmsCount: number;
  genre: string | null;
  films: Films;
  film: Film | null;
  filmsSimilar: Films;
  comments: ReviewsProps;
  isFilmsDataLoading: boolean;
  isFilmsSimilarDataLoading: boolean;
  isCommentsDataLoading: boolean;
}

const inisialState: InitalState = {
  films: [],
  film: null,
  genre: 'All genres',
  filmsSimilar: [],
  comments: [],
  renderedFilmsCount: 0,
  filmsCount: 0,
  isFilmsDataLoading: false,
  isFilmsSimilarDataLoading: false,
  isCommentsDataLoading: false,
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
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
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
    });
});

export {reducer};
