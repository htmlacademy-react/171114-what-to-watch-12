import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Logo/>
      </HistoryRouter>,
    );

    const element = screen.getByText(/T/i);

    expect(element).toBeInTheDocument();
  });
});
