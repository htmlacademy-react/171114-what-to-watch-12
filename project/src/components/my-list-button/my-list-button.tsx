import React, { useEffect } from 'react';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { changeIsFavoriteAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';
import { getMyList } from '../../store/films-process/selectors';
import { setFavotite } from '../../store/film-process/film-process';

type MyListButtonProps = {
  id: number;
  isFavorite: boolean;
};

function MyListButton({id, isFavorite}: MyListButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const myFilms = useAppSelector(getMyList);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      const favoriteData = {
        id,
        isFavorite: isFavorite ? 0 : 1
      };
      dispatch(changeIsFavoriteAction(favoriteData));
    } else {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
  };
  useEffect(() => {
    dispatch(setFavotite());
  }, [dispatch]);
  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleClick}
    >
      {
        isFavorite
          ?
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#in-list"></use>
          </svg>
          :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }
      <span>My list</span>
      <span className="film-card__count">{myFilms.length}</span>
    </button>
  );
}
export default React.memo(MyListButton);
