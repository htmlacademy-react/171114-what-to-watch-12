import { createAction } from '@reduxjs/toolkit';
import { Films, Film, ReviewsProps } from '../types/film-info';
import { AppRoute, AuthorizationStatus } from '../const';

export const renderedFilmsInc = createAction('renderedFilmsInc');
export const renderedFilmsReset = createAction('renderedFilmsReset');
export const filmsCountSet = createAction<{filmsCount: number}>('filmCountSet');
export const loadFilms = createAction<Films>('loadFilms');
export const loadFilm = createAction<Film>('loadFilm');
export const loadFilmsSimilar = createAction<Films>('loadFilmsSimilar');
export const loadComments = createAction<ReviewsProps>('loadComments');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const setFilmsSimilarDataLoadingStatus = createAction<boolean>('data/setFilmsSimilarDataLoadingStatus');
export const setCommentsDataLoadingStatus = createAction<boolean>('data/setCommentsDataLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
