import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../../components/history-route/history-route';
import LogIn from './log-in';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <LogIn/>
      </HistoryRouter>,
    );

    const element = screen.getByText('Sign in');

    expect(element).toBeInTheDocument();
  });
});
