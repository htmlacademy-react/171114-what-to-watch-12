export enum AppRoute {
  SignIn = '/login',
  AddReview = '/films/:id/review',
  Film = '/films/:id/:tab',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/:id'
}

export const FILM_COUNT_PER_STEP = 8;
