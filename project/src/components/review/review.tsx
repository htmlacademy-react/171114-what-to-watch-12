import dayjs from 'dayjs';
import { ReviewProps } from '../../types/film-info';

const REVIEW_DATE_FORMAT = 'MMMM D, YYYY';
const getReviewDate = (date: string) => date ? dayjs(date).format(REVIEW_DATE_FORMAT) : '';


function Review({id, comment, userName, userId, date, rating}: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={date}>{getReviewDate(date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
