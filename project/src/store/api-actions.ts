import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Films, Film, ReviewsProps } from '../types/film-info';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review-data';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, { id: string }, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>('data/fetchFilm', async ({ id }, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  });

export const fetchFilmsSimilarAction = createAsyncThunk<Films, { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('data/fetchFilmsSimilar', async ({ id }, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
  return data;
});

export const fetchCommentsAction = createAsyncThunk<ReviewsProps, { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('data/fetchComments', async ({ id }, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewsProps>(`${APIRoute.Comments}/${id}`);
  return data;
});

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
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
