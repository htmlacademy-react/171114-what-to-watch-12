export enum AppRoute {
  SignIn = '/login',
  AddReview = '/films/:id/add-review',
  Film = '/films/:id',
  FilmTab = '/films/:id/:tab',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/:id'
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export enum APIRoute {
  Comments = '/comments',
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  MyList = '/favorite',
  Promo = '/promo',
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

export enum NameSpace {
  Film = 'film',
  Films = 'films',
  User = 'user',
}

export const FILM_COUNT_PER_STEP = 8;
export const TIME_OUT_DELAY = 1000;
export const REVIEW_DATE_FORMAT = 'MMMM D, YYYY';
export const TIME_LEFT_FORMAT_MINUTES = '-mm:ss';
export const TIME_LEFT_FORMAT_HOURS = '-HH:mm:ss';
export const MAX_COUNT_OF_GENRE_LIST = 9;
export const BACKEND_URL = 'https://12.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;
export const DEFAULT_GENRE = 'All genres';
export const EMAIL_REGEXP = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
export const PASSWORD_REGEXP = /^([A-Za-z0-9~`'&quot;!@#№?$%^&*()_\-+\\=<>|/.,:;[\]{}]{2,25})$/;
