import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Films, Film, ReviewsProps } from '../types/film-info';
import { loadFilms,
  loadFilm,
  loadFilmsSimilar,
  loadComments,
  requireAuthorization,
  setFilmsDataLoadingStatus,
  setFilmsSimilarDataLoadingStatus,
  setCommentsDataLoadingStatus,
  redirectToRoute,
  setError } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review-data';
import { store } from './';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const fetchFilmAction = createAsyncThunk<void, { id: string }, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('data/fetchFilm', async ({ id }, { dispatch, extra: api }) => {
    try {
      dispatch(setFilmsDataLoadingStatus(true));
      const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
      dispatch(loadFilm(data));
    } finally {
      dispatch(setFilmsDataLoadingStatus(false));
    }
  });

export const fetchFilmsSimilarAction = createAsyncThunk<void, { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('data/fetchFilmsSimilar', async ({ id }, { dispatch, extra: api }) => {
  try {
    dispatch(setFilmsSimilarDataLoadingStatus(true));
    const { data } = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadFilmsSimilar(data));
  } finally {
    dispatch(setFilmsSimilarDataLoadingStatus(false));
  }
});

export const fetchCommentsAction = createAsyncThunk<void, { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('data/fetchComments', async ({ id }, { dispatch, extra: api }) => {
  try {
    dispatch(setCommentsDataLoadingStatus(true));
    const { data } = await api.get<ReviewsProps>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data));
  } finally {
    dispatch(setCommentsDataLoadingStatus(false));
  }
});

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const addReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/addReview',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    await api.post<ReviewData>(`${APIRoute.Comments}/${id}`, {rating, comment});
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
