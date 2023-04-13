import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getFilmsCount = (state: State): number => state[NameSpace.Game].filmsCount;
export const getRenderedFilmsCount = (state: State): number => state[NameSpace.Game].renderedFilmsCount;
export const getGenre = (state: State): number => state[NameSpace.Game].genre;
