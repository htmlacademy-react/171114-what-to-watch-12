import React from 'react';

function PromoNotFound(): JSX.Element {
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <h2 className="film-card__title">Not Found</h2>
      </div>
    </div>
  );
}
export default React.memo(PromoNotFound);
