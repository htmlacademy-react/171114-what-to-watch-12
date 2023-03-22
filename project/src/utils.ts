import dayjs from 'dayjs';
import { Filmratinglevel, REVIEW_DATE_FORMAT } from './const';

const getRunTime = (duration: number) => `${Math.round(duration / 60)}h ${duration % 60}m`;

const getReviewDate = (date: string) => date ? dayjs(date).format(REVIEW_DATE_FORMAT) : '';

const getUserRating = (filmRating: number): string => {
  if (filmRating < Filmratinglevel.BAD.max) {
    return Filmratinglevel.BAD.rating;
  }
  if (filmRating < Filmratinglevel.NORMAL.max) {
    return Filmratinglevel.NORMAL.rating;
  }
  if (filmRating < Filmratinglevel.GOOD.max) {
    return Filmratinglevel.GOOD.rating;
  }
  if (filmRating < Filmratinglevel.VERY_GOOD.max) {
    return Filmratinglevel.VERY_GOOD.rating;
  }
  return Filmratinglevel.AWENSOME.rating;
};

export {
  getUserRating,
  getReviewDate,
  getRunTime
};
