import { filmsProcess } from './films-process';
import { FILM_COUNT_PER_STEP, DEFAULT_GENRE } from '../../const';
import { renderedFilmsInc, renderedFilmsReset, filmsCountSet, setGenre } from './films-process';
import { films } from '../../utils/mocks';
import { fetchFilmsAction,
  fetchFilmsSimilarAction,
  fetchMyListAction } from '../api-actions';

describe('Reducer: filmsProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        films: [],
        filmsCount: 0,
        renderedFilmsCount: 0,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should increment renderedFilmsCount by value of FILM_COUNT_PER_STEP', () => {
    const state = {films,
      filmsCount: films.length,
      renderedFilmsCount: FILM_COUNT_PER_STEP,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, renderedFilmsInc()))
      .toEqual({films,
        filmsCount: films.length,
        renderedFilmsCount: FILM_COUNT_PER_STEP + FILM_COUNT_PER_STEP,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should reset renderedFilmsCount to initial value', () => {
    const state = {films,
      filmsCount: films.length,
      renderedFilmsCount: FILM_COUNT_PER_STEP + FILM_COUNT_PER_STEP,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, renderedFilmsReset()))
      .toEqual({films,
        filmsCount: films.length,
        renderedFilmsCount: FILM_COUNT_PER_STEP,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });


  it('should set filmsCount by length of films', () => {
    const state = {films,
      filmsCount: 0,
      renderedFilmsCount: FILM_COUNT_PER_STEP,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, filmsCountSet(films.length)))
      .toEqual({films,
        filmsCount: films.length,
        renderedFilmsCount: FILM_COUNT_PER_STEP,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should set genre by syring', () => {
    const state = {films,
      filmsCount: films.length,
      renderedFilmsCount: FILM_COUNT_PER_STEP,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, setGenre('Comedy')))
      .toEqual({films,
        filmsCount: films.length,
        renderedFilmsCount: FILM_COUNT_PER_STEP,
        genre: 'Comedy',
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should update films by load films', () => {
    const state = {films: [],
      filmsCount: 0,
      renderedFilmsCount: 0,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: true,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, {type: fetchFilmsAction.fulfilled.type, payload: films}))
      .toEqual({films,
        filmsCount: films.length,
        renderedFilmsCount: FILM_COUNT_PER_STEP,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should set isFilmsDataLoading if films is loading', () => {
    const state = {films: [],
      filmsCount: 0,
      renderedFilmsCount: 0,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, {type: fetchFilmsAction.pending.type}))
      .toEqual({films: [],
        filmsCount: 0,
        renderedFilmsCount: 0,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: true,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should set isFilmsDataLoading false if films not loaded', () => {
    const state = {films: [],
      filmsCount: 0,
      renderedFilmsCount: 0,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: true,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, {type: fetchFilmsAction.rejected.type}))
      .toEqual({films: [],
        filmsCount: 0,
        renderedFilmsCount: 0,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should update filmsSimilar by load filmsSimilar', () => {
    const state = {films: [],
      filmsCount: 0,
      renderedFilmsCount: 0,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: true,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, {type: fetchFilmsSimilarAction.fulfilled.type, payload: films}))
      .toEqual({films: [],
        filmsCount: 0,
        renderedFilmsCount: 0,
        genre: DEFAULT_GENRE,
        filmsSimilar: films,
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should set isFilmsSimilarDataLoading if filmsSimilar is loading', () => {
    const state = {films: [],
      filmsCount: 0,
      renderedFilmsCount: 0,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, {type: fetchFilmsSimilarAction.pending.type}))
      .toEqual({films: [],
        filmsCount: 0,
        renderedFilmsCount: 0,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: true,
        isMyListLoading: false,});
  });

  it('should set isFilmsSimilarDataLoading false if filmsSimilar not loaded', () => {
    const state = {films: [],
      filmsCount: 0,
      renderedFilmsCount: 0,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: true,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, {type: fetchFilmsSimilarAction.rejected.type}))
      .toEqual({films: [],
        filmsCount: 0,
        renderedFilmsCount: 0,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should update myList by load myList', () => {
    const state = {films: [],
      filmsCount: 0,
      renderedFilmsCount: 0,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: true,};
    expect(filmsProcess.reducer(state, {type: fetchMyListAction.fulfilled.type, payload: films}))
      .toEqual({films: [],
        filmsCount: 0,
        renderedFilmsCount: 0,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: films,
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });

  it('should set isMyListLoading if myList is loading', () => {
    const state = {films: [],
      filmsCount: 0,
      renderedFilmsCount: 0,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: false,};
    expect(filmsProcess.reducer(state, {type: fetchMyListAction.pending.type}))
      .toEqual({films: [],
        filmsCount: 0,
        renderedFilmsCount: 0,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: true,});
  });

  it('should set isMyListLoading false if myList not loaded', () => {
    const state = {films: [],
      filmsCount: 0,
      renderedFilmsCount: 0,
      genre: DEFAULT_GENRE,
      filmsSimilar: [],
      myList: [],
      isFilmsDataLoading: false,
      isFilmsSimilarDataLoading: false,
      isMyListLoading: true,};
    expect(filmsProcess.reducer(state, {type: fetchMyListAction.rejected.type}))
      .toEqual({films: [],
        filmsCount: 0,
        renderedFilmsCount: 0,
        genre: DEFAULT_GENRE,
        filmsSimilar: [],
        myList: [],
        isFilmsDataLoading: false,
        isFilmsSimilarDataLoading: false,
        isMyListLoading: false,});
  });
});
