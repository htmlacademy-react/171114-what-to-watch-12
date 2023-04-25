import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import PlayButton from './play-button';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();

describe('Component: PlayButton', () => {

  it('handleClick should called when user click Play', async () => {
    const handleClick = jest.fn();
    render(
      <HistoryRouter history={history}>
        <PlayButton handleClick={handleClick}/>
      </HistoryRouter>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toBeCalled();
  });

  it('should render correctly', () => {
    const handleClick = jest.fn();
    render(
      <HistoryRouter history={history}>
        <PlayButton handleClick={handleClick}/>
      </HistoryRouter>,
    );
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });
});
