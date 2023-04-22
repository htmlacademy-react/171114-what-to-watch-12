import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import Details from './details';
import { film } from '../../utils/mocks';

describe('Component: Details', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Details director={film.director}
          starring={film.starring}
          runTime={film.runTime}
          genre={film.genre}
          released={film.released}
        />
      </HistoryRouter>,
    );

    const element = screen.getByText(/Director/i);

    expect(element).toBeInTheDocument();
  });
});
