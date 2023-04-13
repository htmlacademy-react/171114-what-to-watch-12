import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

type FilmCardHeaderProps = {
  backgroundImage: string;
  name: string;
  id: number;
  posterImage: string;
};

function FilmCardHeader({backgroundImage, name, id, posterImage}: FilmCardHeaderProps): JSX.Element {
  return (
    <div className="film-card__header">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <Logo />

        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={`/films/:${id}`} className="breadcrumbs__link">{name}</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link to={`/films/:${id}/review`} className="breadcrumbs__link">Add review</Link>
            </li>
          </ul>
        </nav>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/login" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>

      <div className="film-card__poster film-card__poster--small">
        <img src={posterImage} alt={name} width="218" height="327" />
      </div>
    </div>
  );
}
export default React.memo(FilmCardHeader);


