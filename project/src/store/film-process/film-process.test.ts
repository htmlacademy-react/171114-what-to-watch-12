import { filmProcess } from './film-process';
import { setFavotite } from './film-process';
import { film } from '../../utils/mocks';

describe('Reducer: filmProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        film: null,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: false,
        isPromoFavotite: false,});
  });

  it('should increment current step by a given value', () => {
    const state = {film,
      promo: null,
      comments: [],
      isFilmDataLoading: false,
      isPromoLoading: false,
      isCommentsDataLoading: false,
      isFavotite: false,
      isPromoFavotite: false,};
    expect(filmProcess.reducer(state, setFavotite()))
      .toEqual({film,
        promo: null,
        comments: [],
        isFilmDataLoading: false,
        isPromoLoading: false,
        isCommentsDataLoading: false,
        isFavotite: true,
        isPromoFavotite: false,});
  });
});
