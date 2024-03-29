import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import NotFoundScreen from './not-found-screen';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <NotFoundScreen />
        </HelmetProvider>
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('404. Page not found');

    expect(headerElement).toBeInTheDocument();
  });
});
