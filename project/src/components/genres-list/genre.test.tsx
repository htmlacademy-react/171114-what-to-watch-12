import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import GenresList from './genres-list';
import { film, films } from '../../utils/mocks';

describe('Component: GenresList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <GenresList genre={film.genre}
          films={films}
        />
      </HistoryRouter>,
    );

    const element = screen.getByText(/All genres/i);

    expect(element).toBeInTheDocument();
  });
});
