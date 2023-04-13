import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import { Films, Film, ReviewsProps } from '../types/film-info';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type LoadData = {
  films: Films;
  film: Film | null;
  filmsSimilar: Films;
  comments: ReviewsProps;
  isFilmsDataLoading: boolean;
  isFilmsSimilarDataLoading: boolean;
  isCommentsDataLoading: boolean;
}

export type FilmsProcess = {
  renderedFilmsCount: number;
  filmsCount: number;
  genre: string | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
