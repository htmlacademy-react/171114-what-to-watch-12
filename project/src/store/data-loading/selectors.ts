import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Films } from '../../types/film-info';

export const getFilms = (state: State): Films => state[NameSpace.Data].films;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;
