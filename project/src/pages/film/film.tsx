import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from '../../components/header/header';
import LikeThis from '../../components/like-this/like-this';
import Footer from '../../components/footer/footer';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { films, filmsCards, reviews } from '../../mocks/film-info';


const filmLikeThis = filmsCards.slice(0, 4);
// eslint-disable-next-line no-console
console.log(reviews);

function Film(): JSX.Element {
  const params = useParams();
  const film = films.find((element) => element.id.toString() === params.id);
  if(params.id === undefined || !film) {
    return (
      <NotFoundScreen />
    );
  } else {
    return (
      <React.Fragment>
        <Helmet>
          <title>What to watch. {film.name}</title>
        </Helmet>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>
            < Header />

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">9</span>
                  </button>

                  <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <NavLink to={`/films/${film.id}/overview`} id='overview' className="film-nav__link">Overview</NavLink>
                    </li>
                    <li className="film-nav__item">
                      <NavLink to={`/films/${film.id}/details`} className="film-nav__link">Details</NavLink>
                    </li>
                    <li className="film-nav__item">
                      <NavLink to={`/films/${film.id}/reviews`} className="film-nav__link">Reviews</NavLink>
                    </li>
                  </ul>
                </nav>
                { params.tab === 'overview' ? <Overview rating={film.rating} scoresCount={film.scoresCount} description={film.description} director={film.description} starring={film.starring} /> : '' }
                { params.tab === 'details' ? <Details director={film.description} starring={film.starring} runTime={film.runTime} genre={film.genre} released={film.released}/> : '' }
                { params.tab === 'reviews' ? <Reviews reviews={reviews}/> : '' }
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <LikeThis films={filmLikeThis}/>
          <Footer />
        </div>
      </React.Fragment>
    );
  }

}

export default Film;
