import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, FILM_COUNT_PER_STEP, DEFAULT_GENRE } from '../../const';
import { FilmsProcess } from '../../types/state';
import { fetchFilmsAction,
  fetchFilmsSimilarAction,
  fetchMyListAction } from '../api-actions';

const initialState: FilmsProcess = {
  films: [],
  filmsCount: 0,
  renderedFilmsCount: 0,
  genre: DEFAULT_GENRE,
  filmsSimilar: [],
  myList: [],
  isFilmsDataLoading: false,
  isFilmsSimilarDataLoading: false,
  isMyListLoading: false,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    renderedFilmsInc: (state) => {
      const filmCount = state.films.length;
      const newRenderedFilmsCount = Math.min(filmCount, state.renderedFilmsCount + FILM_COUNT_PER_STEP);
      state.renderedFilmsCount = newRenderedFilmsCount;
    },
    renderedFilmsReset: (state) => {
      state.renderedFilmsCount = Math.min(state.films.length, FILM_COUNT_PER_STEP);
    },
    filmsCountSet: (state, action: PayloadAction<number>) => {
      state.filmsCount = action.payload;
    },
    setGenre: (state, action: PayloadAction<string | null>) => {
      state.genre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
        state.filmsCount = state.films.length;
        state.renderedFilmsCount = Math.min(state.films.length, FILM_COUNT_PER_STEP);
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsSimilarAction.pending, (state) => {
        state.isFilmsSimilarDataLoading = true;
      })
      .addCase(fetchFilmsSimilarAction.fulfilled, (state, action) => {
        state.filmsSimilar = action.payload;
        state.isFilmsSimilarDataLoading = false;
      })
      .addCase(fetchFilmsSimilarAction.rejected, (state) => {
        state.isFilmsSimilarDataLoading = false;
      })
      .addCase(fetchMyListAction.pending, (state) => {
        state.isMyListLoading = true;
      })
      .addCase(fetchMyListAction.fulfilled, (state, action) => {
        state.myList = action.payload;
        state.isMyListLoading = false;
      })
      .addCase(fetchMyListAction.rejected, (state) => {
        state.isMyListLoading = false;
      });
  }
});

export const { renderedFilmsInc, renderedFilmsReset, filmsCountSet, setGenre } = filmsProcess.actions;
