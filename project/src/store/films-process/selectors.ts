import { NameSpace } from '../../const';
import { Films } from '../../types/film-info';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';

export const getFilmsCount = (state: State): number => state[NameSpace.Films].filmsCount;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Films].isFilmsDataLoading;
export const getFilms = (state: State): Films => state[NameSpace.Films].films;
export const getFilmsSimilarDataLoadingStatus = (state: State): boolean => state[NameSpace.Films].isFilmsSimilarDataLoading;
export const getFilmsSimilar = (state: State): Films => state[NameSpace.Films].filmsSimilar;
export const getRenderedFilmsCount = (state: State): number => state[NameSpace.Films].renderedFilmsCount;
export const getGenre = (state: State): string | null => state[NameSpace.Films].genre;
export const getMyListLoadingStatus = (state: State): boolean => state[NameSpace.Films].isMyListLoading;
export const getMyList = (state: State): Films => state[NameSpace.Films].myList;
export const getFilteredFilms = createSelector(
  getFilms,
  getGenre,
  (films, genre) => {
    if (genre === null || genre === 'All genres') {
      return films;
    } else {
      return films.filter((film) => film.genre === genre);
    }
  }
);
