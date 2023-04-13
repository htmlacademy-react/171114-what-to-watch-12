import { combineReducers} from '@reduxjs/toolkit';
import { NameSpace} from '../const';
import { filmsProcess } from './films-process/films-process';
import { filmProcess } from './film-process/film-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
