import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilm } from '../../store/film-process/selectors';
import { store } from '../../store';
import { setPlayerOpen } from '../../store/film-process/film-process';

function Player(): JSX.Element {
  const ref = useRef<HTMLVideoElement>(null);
  const dispatch = useAppDispatch();
  const params = useParams();
  const film = useAppSelector(getFilm);
  let isPlaying = false;
  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchFilmAction({ id: params.id }));
    }
  }, [params.id]);
  useEffect(() => () => {
    dispatch(setPlayerOpen(false));
  }, [dispatch]);

  if(params.id === undefined || !film) {
    return (
      <NotFoundScreen />
    );
  }
  const handleExitClick = () => {
    window.close();
    dispatch(setPlayerOpen(false));
  };
  const handlePlayClick = () => {
    if (ref.current) {
      if(!isPlaying) {
        ref.current.play();
        isPlaying = true;
      } else {
        ref.current.pause();
        isPlaying = false;
      }
    }
  };
  const handleFullScreenClick = () => {
    ref.current?.requestFullscreen();
  };

  return (
    <div className="player">
      <Helmet>
        <title>What to watch. Player</title>
      </Helmet>
      <video className="player__video" poster={film.previewVideoLink} ref={ref}>
        <source src={film.videoLink} />
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={handleExitClick}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: `${ref.current ? ref.current.currentTime / ref.current.duration : 0}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{ref.current ? ref.current.currentTime : 0}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayClick}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenClick}
          >
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
