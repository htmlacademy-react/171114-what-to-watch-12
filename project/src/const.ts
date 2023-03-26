export enum AppRoute {
  SignIn = '/login',
  AddReview = '/films/:id/add-review',
  Film = '/films/:id',
  FilmTab = '/films/:id/:tab',
  Main = '/',
  MainGenre = '/:genre',
  MyList = '/mylist',
  Player = '/player/:id'
}
export enum NameOfTabs {
  ReviewsTab = 'reviews',
  DetailsTab = 'details',
  OverviewTab = 'overview'
}
export const Filmratinglevel = {
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

export const Genres = {
  'all': 'All genres',
  'Comedy': 'Comedies',
  'Crime': 'Crime',
  'Documentary': 'Documentary',
  'Drama': 'Dramas',
  'Horror': 'Horror',
  'Kids & Family': 'Kids & Family',
  'Romance': 'Romance',
  'Sci-Fi': 'Sci-Fi',
  'Thriller': 'Thrillers',
  'Adventure': 'Adventure',
  'Action': 'Action',
  'Fantasy': 'Fantasy'
};

export const FILM_COUNT_PER_STEP = 8;
export const TIME_OUT_DELAY = 1000;
export const REVIEW_DATE_FORMAT = 'MMMM D, YYYY';
