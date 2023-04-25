import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import AddReview from './add-review';
import HistoryRouter from '../../components/history-router/history-router';
import { AuthorizationStatus } from '../../const';
import { film } from '../../utils/mocks';
import '@testing-library/jest-dom';

const history = createMemoryHistory();
const makeMockStore = configureMockStore();
const userAuthorizedState = {
  user: {authorizationStatus: AuthorizationStatus.Auth},
  film: {film},
};
const mockUseParams = jest.fn().mockReturnValue({
  id: `${film.id}`,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  useParams: () => mockUseParams(),
}));

describe('Component: AddReview', () => {
  it('renders correctly', () => {
    mockUseParams.mockReturnValueOnce({
      id: `${film.id}`,
    });
    const mockStore = makeMockStore(userAuthorizedState);

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <AddReview />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(`${film.name}`)).toBeInTheDocument();
    expect(screen.getByText(/Rating 10/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox'))
      .toHaveProperty('name', 'review-text');
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });
});
