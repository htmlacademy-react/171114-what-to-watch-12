import { render, screen } from '@testing-library/react';
import FilmsList from './films-list';
import { filmsMock } from '../../utils/mocks';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-router/history-router';
import { AuthorizationStatus } from '../../const';
import { film } from '../../utils/mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  user: {authorizationStatus: AuthorizationStatus.NoAuth},
  film: {film,
    isFormDisabled: false},
});

describe('Component: FilmsList', () => {
  it('renders plain block', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilmsList filmsFiltered={filmsMock}/>
        </HistoryRouter>
      </Provider>,

    );

    const element1 = screen.getByText(`${filmsMock[0].name}`);
    expect(element1).toBeInTheDocument();
    const element2 = screen.getByText(`${filmsMock[1].name}`);
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByText(`${filmsMock[2].name}`);
    expect(element3).toBeInTheDocument();
  });
});

