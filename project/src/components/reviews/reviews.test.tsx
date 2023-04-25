import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import Reviews from './reviews';
import { comments } from '../../utils/mocks';

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Reviews reviews={comments}/>
      </HistoryRouter>,
    );

    const element = screen.getByText(`${comments[0].comment}`);

    expect(element).toBeInTheDocument();
  });
});
