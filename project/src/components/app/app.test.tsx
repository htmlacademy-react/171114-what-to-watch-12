import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-router/history-router';
import { AuthorizationStatus, AppRoute, DEFAULT_GENRE, FILM_COUNT_PER_STEP } from '../../const';
import App from './app';
import { films, film } from '../../utils/mocks';

const mockStore = configureMockStore();

const store = mockStore({
  user: {authorizationStatus: AuthorizationStatus.NoAuth},
  films: {isFilmsDataLoading: false,
    isFilmsSimilarDataLoading: false,
    filmsSimilar: films.slice(0, 4),
    films,
    myList: films,
    renderedFilmsCount: FILM_COUNT_PER_STEP,
    genre: DEFAULT_GENRE,
    filmsCount: films.length},
  film: {isFilmDataLoading: false,
    film,
    isPromoLoading: false,
    promo: film,
  },
});

window.scrollTo = jest.fn();

window.HTMLMediaElement.prototype.play = () => new Promise((resolve) => {
  resolve();});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store} key={'1'}>
    <HistoryRouter history={history} key={'2'}>
      <App key={'3'}/>
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
    expect(screen.getByText(/2019 What to watch Ltd./i)).toBeInTheDocument();
  });

  it('should render "Sign in" when user navigate to "/login"', () => {
    history.push(AppRoute.SignIn);

    render(fakeApp);

    expect(screen.getByRole('heading')).toHaveTextContent(/Sign in/i);
  });

  it('should render "Film" when user navigate to "/films/:id"', () => {
    history.push(AppRoute.Film);

    render(fakeApp);

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });

  it('should render "Player" when user navigate to "/player/:id"', () => {
    history.push(AppRoute.Player);

    render(fakeApp);

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText('Transpotting')).toBeInTheDocument();
  });
});
