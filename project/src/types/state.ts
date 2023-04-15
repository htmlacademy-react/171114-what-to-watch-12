import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import { Films, Film, ReviewsProps } from '../types/film-info';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type FilmProcess = {
  film: Film | null;
  promo: Film | null;
  comments: ReviewsProps;
  isFilmDataLoading: boolean;
  isPromoLoading: boolean;
  isCommentsDataLoading: boolean;
  isPlayerOpen: boolean;
}

export type FilmsProcess = {
  films: Films;
  filmsSimilar: Films;
  myList: Films;
  renderedFilmsCount: number;
  filmsCount: number;
  genre: string | null;
  isFilmsDataLoading: boolean;
  isFilmsSimilarDataLoading: boolean;
  isMyListLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
