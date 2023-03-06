import Main from '../../pages/main/main';
import PromoFilm from '../promo-film/promo-film';
import { PromoFilmProps } from '../../types/film-info';

function App({title, genre, year}: PromoFilmProps): JSX.Element {
  return (
    <section>
      <PromoFilm title={title} genre={genre} year={year} />
      <Main />
    </section>
  );
}

export default App;
