import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import SignIn from './sign-in';
import HistoryRouter from '../../components/history-router/history-router';
import { AuthorizationStatus, AppRoute } from '../../const';

const history = createMemoryHistory();

const makeMockStore = configureMockStore();

const userAuthorizedState = {
  user: {authorizationStatus: AuthorizationStatus.Auth},
};
const userNotAuthorizedState = {
  user: {authorizationStatus: AuthorizationStatus.NoAuth},
};

describe('Component: Sign in', () => {
  it('renders correctly', () => {
    const mockStore = makeMockStore(userNotAuthorizedState);

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <SignIn />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByRole('heading'))
      .toHaveAccessibleName(/Sign in/i);
    expect(screen.getByRole('textbox'))
      .toHaveProperty('id', 'user-email');
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button'))
      .toHaveAccessibleName(/Sign in/i);
  });


  it('redirects to <Main> page if user is authorized', () => {
    const mockStore = makeMockStore(userAuthorizedState);

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <SignIn />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(history.location.pathname)
      .toEqual(AppRoute.Main);
  });
});
