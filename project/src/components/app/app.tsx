import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PromoFilm from '../promo-film/promo-film';
import PrivateRoute from '../../components/private-route/private-route';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';
import { PromoFilmProps, Films } from '../../types/film-info';

type AppScreenProps = {
  promoFilmInfo: PromoFilmProps;
  films: Films;
}

function App({promoFilmInfo, films}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={
                <section>
                  <PromoFilm name={promoFilmInfo.name} genre={promoFilmInfo.genre} year={promoFilmInfo.year} id={promoFilmInfo.id}/>
                  <Main films={films} />
                </section>
              }
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
              path={AppRoute.SignIn}
              element={<SignIn />}
            />
            <Route
              path={AppRoute.MyList}
              element={
                <PrivateRoute>
                  <MyList films={films} />
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
