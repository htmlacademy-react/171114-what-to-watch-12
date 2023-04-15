import React from 'react';

type PlayButtonProps = {
  handleClick: () => void;
};

function PlayButton({ handleClick }: PlayButtonProps): JSX.Element {
  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default React.memo(PlayButton);
