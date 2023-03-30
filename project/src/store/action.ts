import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film-info';
import {AuthorizationStatus} from '../const';

export const renderedFilmsInc = createAction('renderedFilmsInc');
export const renderedFilmsReset = createAction('renderedFilmsReset');
export const filmsCountSet = createAction<{filmsCount: number}>('filmCountSet');
export const loadFilms = createAction<Films>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
