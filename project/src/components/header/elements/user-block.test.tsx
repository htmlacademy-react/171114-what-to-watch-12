import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../../history-router/history-router';
import UserBlock from './user-block';
import { films, film } from '../../../utils/mocks';
import { AuthorizationStatus, DEFAULT_GENRE, FILM_COUNT_PER_STEP } from '../../../const';


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

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock/>
        </HistoryRouter>
      </Provider>,
    );

    const headerElement = screen.getByText('Sign out');

    expect(headerElement).toBeInTheDocument();
  });
});
