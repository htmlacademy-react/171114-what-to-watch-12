import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import FilmCardHeader from '../../components/film-card-header/film-card-header';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { store } from '../../store';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilm } from '../../store/film-process/selectors';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function AddReview(): JSX.Element {
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchFilmAction({ id: params.id }));
    }
  }, [params.id]);

  const film = useAppSelector(getFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  if(authorizationStatus !== AuthorizationStatus.Auth) {
    dispatch(redirectToRoute(AppRoute.SignIn));
  }

  if(params.id === undefined || !film) {
    return (
      <NotFoundScreen />
    );
  } else {
    return (
      <section className="film-card film-card--full">
        <Helmet>
          <title>What to watch. Add review</title>
        </Helmet>
        <FilmCardHeader backgroundImage={film.backgroundImage} name={film.name} id={film.id} posterImage={film.posterImage}/>
        <div className="add-review">
          <AddReviewForm id={film.id}/>
        </div>
      </section>
    );
  }
}

export default AddReview;
