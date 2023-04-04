import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from '../../components/header/header';
import LikeThis from '../../components/like-this/like-this';
import LikeThisLoading from '../../components/like-this/like-this-loading';
import Footer from '../../components/footer/footer';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { NameOfTabs, AuthorizationStatus } from '../../const';
import { fetchFilmAction, fetchFilmsSimilarAction, fetchCommentsAction } from '../../store/api-actions';
import { store } from '../../store';

function Film(): JSX.Element {
  const params = useParams();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchFilmAction({ id: params.id }));
      store.dispatch(fetchFilmsSimilarAction({ id: params.id }));
      store.dispatch(fetchCommentsAction({ id: params.id }));
    }
  }, [params.id]);

  const film = useAppSelector((state) => state.film);
  const isFilmsSimilarDataLoading = useAppSelector((state) => state.isFilmsSimilarDataLoading);
  const reviews = useAppSelector((state) => state.comments);
  const isCommentsDataLoading = useAppSelector((state) => state.isCommentsDataLoading);

  if (!params.id || !film ) {
    return <NotFoundScreen />;
  }

  const renderTabs = () => {
    switch (params.tab) {
      case NameOfTabs.ReviewsTab:
        return isCommentsDataLoading ? <LikeThisLoading/> : <Reviews reviews={reviews}/>;
      case NameOfTabs.DetailsTab:
        return (
          <Details
            director={film.description}
            starring={film.starring}
            runTime={film.runTime}
            genre={film.genre}
            released={film.released}
          />
        );
      case NameOfTabs.OverviewTab:
      default:
        return (
          <Overview
            rating={film.rating}
            scoresCount={film.scoresCount}
            description={film.description}
            director={film.description}
            starring={film.starring}
          />
        );
    }
  };

  const setActiveTab = (tab: string): string => {
    if(params.tab === undefined && tab === NameOfTabs.OverviewTab ) {
      return 'film-nav__item film-nav__item--active';
    }
    if(params.tab === tab ) {
      return 'film-nav__item film-nav__item--active';
    }
    return 'film-nav__item';
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>What to watch. {film.name}</title>
      </Helmet>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>
          < Header />

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{film.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{film.genre}</span>
                <span className='film-card__year'>{film.released}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
                {(authorizationStatus === AuthorizationStatus.Auth) && <Link to={`/films/${film.id}/add-review`} className='btn film-card__button'>Add review</Link>}

              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={film.posterImage} alt={`${film.name} poster`} width='218' height='327' />
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <ul className='film-nav__list'>
                  <li className={setActiveTab('overview')}>
                    <NavLink to={`/films/${film.id}/overview`} className='film-nav__link'>Overview</NavLink>
                  </li>
                  <li className={setActiveTab('details')}>
                    <NavLink to={`/films/${film.id}/details`} className='film-nav__link'>Details</NavLink>
                  </li>
                  <li className={setActiveTab('reviews')}>
                    <NavLink to={`/films/${film.id}/reviews`} className='film-nav__link'>Reviews</NavLink>
                  </li>
                </ul>
              </nav>
              {renderTabs()}
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        {isFilmsSimilarDataLoading ? <LikeThisLoading/> : <LikeThis/>}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Film;
