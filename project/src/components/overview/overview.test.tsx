import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import Overview from './overview';
import { film } from '../../utils/mocks';

describe('Component: Overview', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Overview rating={film.rating}
          scoresCount={film.scoresCount}
          description={film.description}
          director={film.director}
          starring={film.starring}
        />
      </HistoryRouter>,
    );

    const element = screen.getByText(`Director: ${film.director}`);

    expect(element).toBeInTheDocument();
  });
});
