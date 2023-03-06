import Main from '../../pages/main/main';
import PromoFilm from '../promo-film/promo-film';
import { PromoFilmProps } from '../../types/film-info';

function App(filmInfo: PromoFilmProps): JSX.Element {
  return (
    <section>
      <PromoFilm title={filmInfo.title} genre={filmInfo.genre} year={filmInfo.year} />
      <Main />
    </section>
  );
}

export default App;
