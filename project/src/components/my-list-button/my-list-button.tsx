import React, { useEffect } from 'react';
import { AuthorizationStatus, AppRoute, TRUE_NUMBER, FALSE_NUMBER } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { changeIsFavoriteAction } from '../../store/api-actions';
import { getMyList } from '../../store/films-process/selectors';
import { setFavotite } from '../../store/film-process/film-process';
import { useNavigate } from 'react-router-dom';

type MyListButtonProps = {
  id: number;
  isFavorite: boolean;
};

function MyListButton({id, isFavorite}: MyListButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const myFilms = useAppSelector(getMyList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      const favoriteData = {
        id,
        isFavorite: isFavorite ? FALSE_NUMBER : TRUE_NUMBER
      };
      dispatch(changeIsFavoriteAction(favoriteData));
    } else {
      navigate(AppRoute.SignIn);
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
