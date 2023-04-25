import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-router/history-router';
import Header from './header';
import { AuthorizationStatus } from '../../const';

const history = createMemoryHistory();
const makeMockStore = configureMockStore();
const userAuthorizedState = {
  user: {authorizationStatus: AuthorizationStatus.Auth},
};
const userNotAuthorizedState = {
  user: {authorizationStatus: AuthorizationStatus.NoAuth},
};

describe('Component: Header', () => {

  it('should render correctly if not authorized', () => {
    const mockStore = makeMockStore(userNotAuthorizedState);
    render(
      <Provider store={mockStore}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Header />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render correctly if authorized', () => {
    const mockStore = makeMockStore(userAuthorizedState);
    render(
      <Provider store={mockStore}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Header />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
