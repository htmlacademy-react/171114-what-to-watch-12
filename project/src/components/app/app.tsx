import Main from '../../pages/main/main';
import FilmCard from '../film-card/film-card';
import {AppSmallCardProps} from '../../types/main';

function App({smallCard}: AppSmallCardProps): JSX.Element {
  return (
    <section>
      <FilmCard />
      <Main smallCard={smallCard}/>
    </section>

  );
}

export default App;
