import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector} from '../../hooks';
import FilmCardHeader from '../../components/film-card-header/film-card-header';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { store } from '../../store';
import { fetchFilmAction, checkAuthAction } from '../../store/api-actions';
import { getFilm } from '../../store/film-process/selectors';
import { AuthorizationStatus, AppRoute } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';

function AddReview(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
    }
  }, [authorizationStatus, navigate]);

  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchFilmAction({ id: params.id }));
      store.dispatch(checkAuthAction());
    }
  }, [params.id]);

  const film = useAppSelector(getFilm);
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
