import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';
import { useEffect } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import { fetchMyListAction } from '../../store/api-actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchMyListAction());
    }
  }, [authorizationStatus, dispatch]);

  return (
    <HelmetProvider>
      <ScrollToTop>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main />}
            key={AppRoute.Main}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview/>}
            key={AppRoute.AddReview}
          />
          <Route
            path={AppRoute.Film}
            element={<Film />}
            key={AppRoute.Film}
          />
          <Route
            path={AppRoute.FilmTab}
            element={<Film />}
            key={AppRoute.FilmTab}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn />}
            key={AppRoute.SignIn}
          />
          <Route
            path={AppRoute.MyList}
            element={<MyList />}
            key={AppRoute.MyList}
          />
          <Route
            path={AppRoute.Player}
            element={<Player />}
            key={AppRoute.Player}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
            key={'*'}
          />
        </Routes>
      </ScrollToTop>
    </HelmetProvider>
  );
}

export default App;
