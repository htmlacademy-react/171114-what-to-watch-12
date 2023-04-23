import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { checkAuthAction,
  loginAction,
  logoutAction,
  fetchFilmsAction,
  fetchFilmAction,
  fetchPromoFilmAction,
  fetchFilmsSimilarAction,
  fetchCommentsAction,
  fetchMyListAction } from './api-actions';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { redirectToRoute } from './action';
import { films } from '../utils/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('what-to-whatch-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      redirectToRoute.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('what-to-whatch-token');
  });

  it('should dispatch fetchFilmsAction when GET /films', async () => {
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, films);

    const store = mockStore();

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmsAction.pending.type,
      fetchFilmsAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchFilmAction when GET /films/{id}', async () => {
    const id = '1';
    mockAPI
      .onGet(`${APIRoute.Films}/${id}`)
      .reply(200, films);

    const store = mockStore();

    await store.dispatch(fetchFilmAction({id}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmAction.pending.type,
      fetchFilmAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchPromoFilmAction when GET /promo', async () => {
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, films);

    const store = mockStore();

    await store.dispatch(fetchPromoFilmAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoFilmAction.pending.type,
      fetchPromoFilmAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchFilmsSimilarAction when GET /films/{id}/similar', async () => {
    const id = '1';
    mockAPI
      .onGet(`${APIRoute.Films}/${id}/similar`)
      .reply(200, films);

    const store = mockStore();

    await store.dispatch(fetchFilmsSimilarAction({id}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmsSimilarAction.pending.type,
      fetchFilmsSimilarAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchCommentsAction when GET /comments/{id}', async () => {
    const id = '1';
    mockAPI
      .onGet(`${APIRoute.Comments}/${id}`)
      .reply(200, films);

    const store = mockStore();

    await store.dispatch(fetchCommentsAction({id}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCommentsAction.pending.type,
      fetchCommentsAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchMyListAction when GET /favorite', async () => {
    mockAPI
      .onGet(APIRoute.MyList)
      .reply(200, films);

    const store = mockStore();

    await store.dispatch(fetchMyListAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchMyListAction.pending.type,
      fetchMyListAction.fulfilled.type
    ]);
  });
});
