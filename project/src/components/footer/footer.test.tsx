import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import Footer from './footer';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Footer/>
      </HistoryRouter>,
    );

    const element = screen.getByText(/2019 What to watch Ltd/i);

    expect(element).toBeInTheDocument();
  });
});
