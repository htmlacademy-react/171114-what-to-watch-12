import React from 'react';
import Review from '../../components/review/review';
import { ReviewProps } from '../../types/film-info';

type ReviewsProps = {
  reviews: ReviewProps[];
};

function Reviews({reviews}: ReviewsProps): JSX.Element {
  const firstHalf = [...reviews];
  const secondHalf = firstHalf.splice(0, firstHalf.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstHalf.map((review) => (
          <React.Fragment key={review.id}>
            <Review
              id={review.id}
              comment={review.comment}
              userName={review.userName}
              userId={review.userId}
              date={review.date}
              rating={review.rating}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {secondHalf.map((review) => (
          <React.Fragment key={review.id}>
            <Review
              id={review.id}
              comment={review.comment}
              userName={review.userName}
              userId={review.userId}
              date={review.date}
              rating={review.rating}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
