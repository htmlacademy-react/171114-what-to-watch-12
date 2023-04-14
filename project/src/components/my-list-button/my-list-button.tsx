import React from 'react';

type MyListButtonProps = {
  countOfMyFilms: number;
  handleClick: () => void;
  isFavorite: boolean;
};

function MyListButton({countOfMyFilms, handleClick, isFavorite}: MyListButtonProps): JSX.Element {
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
      <span className="film-card__count">{countOfMyFilms}</span>
    </button>
  );
}
export default React.memo(MyListButton);
