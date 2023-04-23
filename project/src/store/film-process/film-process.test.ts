import { filmProcess } from './film-process';
import { setFavotite } from './film-process';
import { film, comments } from '../../utils/mocks';
import { fetchFilmAction,
  fetchCommentsAction,
  fetchPromoFilmAction,
  changeIsFavoriteAction,
  addReviewAction } from '../api-actions';

describe('Reducer: filmProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        film: null,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set values of isFavotite and isPromoFavotite from film and promo', () => {
    const state = {film,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, setFavotite()))
      .toEqual({film,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: true,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should update film by load film', () => {
    const state = {film: null,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: fetchFilmAction.fulfilled.type, payload: film}))
      .toEqual({film,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set isFilmDataLoading if film is loading', () => {
    const state = {film: null,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: fetchFilmAction.pending.type}))
      .toEqual({film: null,
        promo: null,
        comments: [],
        isFilmDataLoading: true,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set isFilmDataLoading false if film not loaded', () => {
    const state = {film: null,
      promo: null,
      comments: [],
      isFilmDataLoading: true,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: fetchFilmAction.rejected.type}))
      .toEqual({film: null,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should update comments by load comments', () => {
    const state = {film,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: fetchCommentsAction.fulfilled.type, payload: comments}))
      .toEqual({film,
        promo: null,
        comments,
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set isCommentsDataLoading if comments is loading', () => {
    const state = {film,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: fetchCommentsAction.pending.type}))
      .toEqual({film,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: true,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set isCommentsDataLoading false if comments not loaded', () => {
    const state = {film,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: true,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: fetchCommentsAction.rejected.type}))
      .toEqual({film,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should update promo film by load promo film', () => {
    const state = {film: null,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: fetchPromoFilmAction.fulfilled.type, payload: film}))
      .toEqual({film: null,
        promo: film,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set isPromoLoading if promo film is loading', () => {
    const state = {film: null,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: fetchPromoFilmAction.pending.type}))
      .toEqual({film: null,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: true,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set isPromoLoading false if promo film not loaded', () => {
    const state = {film: null,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: true,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: fetchPromoFilmAction.rejected.type}))
      .toEqual({film: null,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set isFavotite from film.isFavorite', () => {
    const state = {film,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: changeIsFavoriteAction.fulfilled.type,
      meta: {arg: {id: 1, isFavorite: 1, },},}))
      .toEqual({film,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: true,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set isPromoFavotite from film.isFavorite if film.id matches promo.id', () => {
    const state = {film,
      promo: film,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: true,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: changeIsFavoriteAction.fulfilled.type,
      meta: {arg: {id: 1, isFavorite: 1, },},}))
      .toEqual({film,
        promo: film,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: true,
        isPromoFavotite: true,
        isFormDisabled: false,
        addReviewError: false,});
  });

  it('should set isFormDisabled if review is sending', () => {
    const state = {film: null,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: false,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: addReviewAction.pending.type}))
      .toEqual({film: null,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: true,
        addReviewError: false,});
  });

  it('should set addReviewError and isFormDisabled false if review not sended', () => {
    const state = {film: null,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: true,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: addReviewAction.rejected.type}))
      .toEqual({film: null,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: true,});
  });

  it('should set addReviewError false and isFormDisabled false if review sended', () => {
    const state = {film,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,
      isFormDisabled: true,
      addReviewError: false,};
    expect(filmProcess.reducer(state, {type: addReviewAction.fulfilled.type,
      meta: {arg: {id: 1, isFavorite: 1, },},}))
      .toEqual({film,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,
        isFormDisabled: false,
        addReviewError: false,});
  });
});
