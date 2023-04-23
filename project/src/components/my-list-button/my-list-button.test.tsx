import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../../components/history-route/history-route';
import MyListButton from './my-list-button';
import { films, film } from '../../utils/mocks';
import { AuthorizationStatus, DEFAULT_GENRE, FILM_COUNT_PER_STEP } from '../../const';

const id = 1;
const isFavorite = false;

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

describe('Component: MyListButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MyListButton id={id} isFavorite={isFavorite}/>
        </HistoryRouter>
      </Provider>,
    );

    const element = screen.getByText(/My list/i);

    expect(element).toBeInTheDocument();
  });
});
