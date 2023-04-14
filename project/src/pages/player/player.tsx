import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilm } from '../../store/film-process/selectors';
import { store } from '../../store';

function Player(): JSX.Element {
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchFilmAction({ id: params.id }));
    }
  }, [params.id]);
  const film = useAppSelector(getFilm);
  if(params.id === undefined || !film) {
    return (
      <NotFoundScreen />
    );
  }
  return (
    <div className="player">
      <Helmet>
        <title>What to watch. Player</title>
      </Helmet>
      <video src={film.videoLink} className="player__video" poster={film.previewVideoLink}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
