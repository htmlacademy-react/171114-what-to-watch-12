import React from 'react';

const FilmRatingLevel = {
  BAD: {
    rating: 'Bad',
    max: 3,
  },
  NORMAL: {
    rating: 'Normal',
    max: 5,
  },
  GOOD: {
    rating: 'Good',
    max: 8,
  },
  VERY_GOOD: {
    rating: 'Very good',
    max: 10,
  },
  AWENSOME: {
    rating: 'Awesome',
    max: 10,
  },
};

const getUserRating = (filmRating: number): string => {

  if (filmRating < FilmRatingLevel.BAD.max) {
    return FilmRatingLevel.BAD.rating;
  }

  if (filmRating < FilmRatingLevel.NORMAL.max) {
    return FilmRatingLevel.NORMAL.rating;
  }

  if (filmRating < FilmRatingLevel.GOOD.max) {
    return FilmRatingLevel.GOOD.rating;
  }

  if (filmRating < FilmRatingLevel.VERY_GOOD.max) {
    return FilmRatingLevel.VERY_GOOD.rating;
  }

  return FilmRatingLevel.AWENSOME.rating;
};

type OverviewProps = {
  rating: number;
  scoresCount: number;
  description: string;
  director: string;
  starring: string[];
};

function Overview({rating, scoresCount, description, director, starring}: OverviewProps): JSX.Element {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getUserRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and other</strong></p>
      </div>
    </React.Fragment>
  );
}

export default Overview;
