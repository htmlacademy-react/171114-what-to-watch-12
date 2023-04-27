import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import ShowMore from './show-more';

const history = createMemoryHistory();

describe('Component: ShowMore', () => {

  it('should render correctly', () => {
    const handleClick = () => {'';};
    render(
      <HistoryRouter history={history}>
        <ShowMore handleClick={handleClick}/>
      </HistoryRouter>,
    );
    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });
});
