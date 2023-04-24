import dayjs from 'dayjs';
import { Filmratinglevel,
  REVIEW_DATE_FORMAT,
  TIME_LEFT_FORMAT_MINUTES,
  TIME_LEFT_FORMAT_HOURS } from '../const';

const getRunTime = (duration: number) => `${Math.round(duration / 60)}h ${duration % 60}m`;

const getReviewDate = (date: string) => date ? dayjs(date).format(REVIEW_DATE_FORMAT) : '';

const getTimeLeft = (time: number) => {
  const newTime = new Date(time * 1000);
  if(time) {
    if(time < 3600) {
      return dayjs(newTime).format(TIME_LEFT_FORMAT_MINUTES);
    } else {
      return dayjs(newTime).format(TIME_LEFT_FORMAT_HOURS);
    }
  }
  return '';
};

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

const checkPassword = (password: string | undefined) => {
  if (
    !password ||
    password.length < 2 ||
    !/\d/.test(password) ||
    !/\D/i.test(password) ||
    false
  ) {
    return false;
  }
  return true;
};

export {
  getUserRating,
  getReviewDate,
  getRunTime,
  getTimeLeft,
  checkPassword
};
