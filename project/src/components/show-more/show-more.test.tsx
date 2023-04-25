import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import ShowMore from './show-more';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();

describe('Component: ShowMore', () => {

  it('handleClick should called when user click ShowMore', async () => {
    const handleClick = jest.fn();
    render(
      <HistoryRouter history={history}>
        <ShowMore handleClick={handleClick}/>
      </HistoryRouter>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toBeCalled();
  });

  it('should render correctly', () => {
    const handleClick = jest.fn();
    render(
      <HistoryRouter history={history}>
        <ShowMore handleClick={handleClick}/>
      </HistoryRouter>,
    );
    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });
});
