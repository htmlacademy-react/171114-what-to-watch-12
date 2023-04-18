import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film, ReviewsProps } from '../../types/film-info';

export const getFilm = (state: State): Film | null => state[NameSpace.Film].film;
export const getFilmDataLoadingStatus = (state: State): boolean => state[NameSpace.Film].isFilmDataLoading;
export const getPromo = (state: State): Film | null => state[NameSpace.Film].promo;
export const getPromoLoadingStatus = (state: State): boolean => state[NameSpace.Film].isPromoLoading;
export const getComments = (state: State): ReviewsProps => state[NameSpace.Film].comments;
export const getCommentsDataLoadingStatus = (state: State): boolean => state[NameSpace.Film].isCommentsDataLoading;
export const getFavoriteStatus = (state: State): boolean => state[NameSpace.Film].isFavotite;
