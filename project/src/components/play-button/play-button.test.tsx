import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import PlayButton from './play-button';

const history = createMemoryHistory();

describe('Component: PlayButton', () => {

  it('should render correctly', () => {
    const handleClick = () => {'';};
    render(
      <HistoryRouter history={history}>
        <PlayButton handleClick={handleClick}/>
      </HistoryRouter>,
    );
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });
});
