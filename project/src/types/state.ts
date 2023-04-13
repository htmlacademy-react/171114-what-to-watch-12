import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import { Films, Film, ReviewsProps } from '../types/film-info';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type FilmProcess = {
  film: Film | null;
  comments: ReviewsProps;
  isFilmDataLoading: boolean;
  isCommentsDataLoading: boolean;
}

export type FilmsProcess = {
  films: Films;
  filmsSimilar: Films;
  renderedFilmsCount: number;
  filmsCount: number;
  genre: string | null;
  isFilmsDataLoading: boolean;
  isFilmsSimilarDataLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
