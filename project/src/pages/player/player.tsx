import { Helmet } from 'react-helmet-async';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Spinner from '../../components/spinner/spinner';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilm } from '../../store/film-process/selectors';
import { store } from '../../store';
import { getTimeLeft } from '../../utils';
import { redirectToRoute } from '../../store/action';
import { AppRoute } from '../../const';

function Player(): JSX.Element {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLVideoElement>(null);
  const params = useParams();
  const film = useAppSelector(getFilm);
  const [isLoadedData, setIsLoadedData] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchFilmAction({ id: params.id }));
    }
  }, [currentTime, params.id, setCurrentTime, setTimeLeft]);

  const handleLoadedData = () => {
    setIsLoadedData(true);
  };
  const handleExitClick = () => {
    if(film) {
      dispatch(redirectToRoute(`/films/${film.id}` as AppRoute));
    } else {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  };
  const handlePlayClick = () => {
    if (ref.current) {
      if(!isPlaying) {
        ref.current.play();
        setIsPlaying(true);
      } else {
        ref.current.pause();
        setIsPlaying(false);
      }
    }
  };
  const handleFullScreenClick = () => {
    if (ref.current) {
      ref.current.requestFullscreen();

    }
  };
  const handleTimeUpdate = () => {
    if (ref.current) {
      setCurrentTime(ref.current.currentTime);
      setTimeLeft(currentTime / ref.current.duration * 100);
    }
  };

  function renderVideo(): JSX.Element {
    if(params.id === null || !film) {
      return (
        <NotFoundScreen />
      );
    }
    return (
      <React.Fragment>
        <video className="player__video"
          poster={film.backgroundImage}
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleLoadedData}
          ref={ref}
        >
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
              <progress className="player__progress" value={timeLeft} max="100"></progress>
              <div className="player__toggler" style={{ left: `${timeLeft}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{getTimeLeft(currentTime)}</div>
          </div>
          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={handlePlayClick}
            >
              { isPlaying
                ?
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>
                :
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg> }
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
      </React.Fragment>
    );
  }
  return (
    <div className="player">
      <Helmet>
        <title>What to watch. Player</title>
      </Helmet>
      {!isLoadedData && <Spinner loading={!isLoadedData}/>}
      { renderVideo() }
    </div>
  );
}

export default Player;
