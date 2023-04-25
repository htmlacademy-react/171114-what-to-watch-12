import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/header/elements/user-block';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import { getMyList, getMyListLoadingStatus } from '../../store/films-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';
import { checkAuthAction } from '../../store/api-actions';
import { store } from '../../store';

function MyList(): JSX.Element {
  const films = useAppSelector(getMyList);
  const isMyListLoading = useAppSelector(getMyListLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    store.dispatch(checkAuthAction());
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
    }
  }, [authorizationStatus, navigate]);

  return (
    <React.Fragment>
      <Helmet>
        <title>What to watch. My list</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
          <UserBlock/>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {isMyListLoading
            ? <h2 className="catalog__title">Loading...</h2>
            : <FilmsList filmsFiltered={films}/>}
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MyList;
