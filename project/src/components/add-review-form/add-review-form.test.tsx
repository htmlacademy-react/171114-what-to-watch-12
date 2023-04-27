import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-router/history-router';
import AddReviewForm from './add-review-form';
import { AuthorizationStatus } from '../../const';
import { film } from '../../utils/mocks';


const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  user: {authorizationStatus: AuthorizationStatus.NoAuth},
  film: {film,
    isFormDisabled: false},
});
const id = 1;

describe('Component: AddReviewForm', () => {

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <AddReviewForm id={id} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Rating 10/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox'))
      .toHaveProperty('name', 'review-text');
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });
});
