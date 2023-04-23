import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import Review from './review';
import { comment } from '../../utils/mocks';


describe('Component: Review', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Review id={comment.id}
          comment={comment.comment}
          user={comment.user}
          date={comment.date}
          rating={comment.rating}
        />
      </HistoryRouter>,
    );

    const element = screen.getByText(`${comment.comment}`);

    expect(element).toBeInTheDocument();
  });
});
