import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import FilmCard from './film-card';
import { film } from '../../utils/mocks';

describe('Component: FilmCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <FilmCard name={film.name}
          previewImage={film.previewImage}
          id={film.id}
          previewVideoLink={film.previewVideoLink}
        />
      </HistoryRouter>,
    );

    const element = screen.getByText(`${film.name}`);

    expect(element).toBeInTheDocument();
  });
});
