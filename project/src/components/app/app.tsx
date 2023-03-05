import Main from '../../pages/main/main';
import FilmCard from '../film-card/film-card';
import { FilmCardProps } from '../../types/film-info';

function App(filmInfo: FilmCardProps): JSX.Element {
  return (
    <section>
      <FilmCard {...filmInfo} />
      <Main />
    </section>

  );
}

export default App;
