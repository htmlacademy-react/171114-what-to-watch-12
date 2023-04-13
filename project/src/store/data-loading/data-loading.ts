import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { LoadData } from '../../types/state';
import { fetchFilmsAction,
  fetchFilmAction,
  fetchFilmsSimilarAction,
  fetchCommentsAction } from '../api-actions';

const initialState: LoadData = {
  films: [],
  film: null,
  filmsSimilar: [],
  comments: [],
  isFilmsDataLoading: false,
  isFilmsSimilarDataLoading: false,
  isCommentsDataLoading: false,
};

export const gameData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
        // state.filmsCount = state.films.length;
        // state.renderedFilmsCount = Math.min(state.films.length, FILM_COUNT_PER_STEP);
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsSimilarAction.pending, (state) => {
        state.isFilmsSimilarDataLoading = true;
      })
      .addCase(fetchFilmsSimilarAction.fulfilled, (state, action) => {
        state.filmsSimilar = action.payload;
        state.isFilmsSimilarDataLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsDataLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsDataLoading = false;
      });
  }
});
