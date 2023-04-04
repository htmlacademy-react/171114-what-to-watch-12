import { ReviewProps } from '../../types/film-info';
import { getReviewDate } from '../../utils';

function Review({id, comment, user, date, rating}: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{getReviewDate(date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
