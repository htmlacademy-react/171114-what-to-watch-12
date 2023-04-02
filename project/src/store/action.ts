import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film-info';
import { AppRoute, AuthorizationStatus } from '../const';

export const renderedFilmsInc = createAction('renderedFilmsInc');
export const renderedFilmsReset = createAction('renderedFilmsReset');
export const filmsCountSet = createAction<{filmsCount: number}>('filmCountSet');
export const loadFilms = createAction<Films>('loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const setError = createAction<string | null>('setError');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
