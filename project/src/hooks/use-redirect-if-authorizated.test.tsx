import { renderHook } from '@testing-library/react/pure';
import { Provider } from 'react-redux';
import { useRedirectingIfAuthorized } from './use-redirect-if-authorizated';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AuthorizationStatus, NameSpace } from '../const';

const makeMockStore = configureMockStore();

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));


describe('Hook: useRedirectingIfAuthorized()', () => {
  it('redirects to specified link if the user is authorized', () => {
    const LINK = '/MOCK-REDIRECT-LINK';

    const mockStore = makeMockStore({
      [ NameSpace.User ]: {
        authorizationStatus: AuthorizationStatus.Auth,
        authorizationError: false,
      },
    });

    renderHook(
      () => useRedirectingIfAuthorized(LINK),
      { wrapper: ({ children }) => (<Provider store={mockStore}>{children}</Provider>) },
    );

    expect(mockNavigate)
      .toBeCalledWith(LINK);
  });


  it('do not redirect if the user is not authorized', () => {
    const LINK = '/MOCK-LINK';

    const mockStore = makeMockStore({
      [ NameSpace.User ]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });

    renderHook(
      () => useRedirectingIfAuthorized(LINK),
      { wrapper: ({ children }) => (<Provider store={mockStore}>{children}</Provider>) },
    );

    expect(mockNavigate).not.toBeCalledWith(LINK);
  });


  it('do not redirect if link is empty', () => {
    const LINK = '';

    const mockStore = makeMockStore({
      [ NameSpace.User ]: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    renderHook(
      () => useRedirectingIfAuthorized(LINK),
      { wrapper: ({ children }) => (<Provider store={mockStore}>{children}</Provider>) },
    );

    expect(mockNavigate).not.toBeCalledWith(LINK);
  });
});
