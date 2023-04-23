import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import PromoFilm from './promo-film';
import { film, films } from '../../utils/mocks';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { AuthorizationStatus, DEFAULT_GENRE, FILM_COUNT_PER_STEP } from '../../const';

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

describe('Component: PromoFilm', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PromoFilm />
        </HistoryRouter>
      </Provider>,
    );

    const element = screen.getByText(`${film.name}`);

    expect(element).toBeInTheDocument();
  });
});
