import { Fragment } from 'react';
import { getRunTime } from '../../utils';

type DetailsProps = {
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
};

function Details({director, starring, runTime, genre, released}: DetailsProps): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.map((item, index, arr) => {
              const keyValue = `${index} - ${item}`;
              return (
                < Fragment key={keyValue}>
                  {item + ((index !== arr.length - 1) ? ',' : '')}
                  {(index !== arr.length - 1) && <br/>}
                </Fragment>
              );
            }
            )}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getRunTime(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;


