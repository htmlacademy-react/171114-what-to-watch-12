import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';
import { fetchFilmAction,
  fetchCommentsAction,
  fetchPromoFilmAction,
  changeIsFavoriteAction,
  addReviewAction } from '../api-actions';

const initialState: FilmProcess = {
  film: null,
  promo: null,
  comments: [],
  isFilmDataLoading: false,
  isPromoLoading: false,
  isCommentsDataLoading: false,
  isFavotite: false,
  isPromoFavotite: false,
  isFormDisabled: false,
  addReviewError: false,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    setFavotite: (state) => {
      if(state.film) {
        state.isFavotite = state.film.isFavorite;
      }
      if(state.promo) {
        state.isPromoFavotite = state.promo.isFavorite;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmDataLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isFilmDataLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsDataLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsDataLoading = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isCommentsDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isPromoLoading = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isPromoLoading = false;
      })
      .addCase(changeIsFavoriteAction.fulfilled, (state, action) => {
        if (state.promo && action.meta.arg.id === state.promo.id) {
          state.isPromoFavotite = !state.isPromoFavotite;
        } else {
          state.isFavotite = !state.isFavotite;
        }
      })
      .addCase(addReviewAction.pending, (state) => {
        state.isFormDisabled = true;
        state.addReviewError = false;
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isFormDisabled = false;
        state.addReviewError = false;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.isFormDisabled = false;
        state.addReviewError = true;
      });
  }
});

export const { setFavotite } = filmProcess.actions;
