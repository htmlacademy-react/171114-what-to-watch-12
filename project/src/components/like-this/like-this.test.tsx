import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import LikeThis from './like-this';
import { films } from '../../utils/mocks';

describe('Component: LikeThis', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <LikeThis films={films}/>
      </HistoryRouter>,
    );

    const element = screen.getByText(/More like this/i);

    expect(element).toBeInTheDocument();
  });
});
