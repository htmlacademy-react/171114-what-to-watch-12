import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import { AppRoute, AuthorizationStatus,} from '../../const';
import Main from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<Main />}
            />
            <Route
              path={AppRoute.AddReview}
              element={<AddReview />}
            />
            <Route
              path={AppRoute.Film}
              element={<Film />}
            />
            <Route
              path={AppRoute.FilmTab}
              element={<Film />}
            />
            <Route
              path={AppRoute.SignIn}
              element={<SignIn />}
            />
            <Route
              path={AppRoute.MyList}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <MyList />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Player}
              element={<Player />}
            />
            <Route
              path="*"
              element={<NotFoundScreen />}
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
