import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import FilmCardHeader from '../../components/film-card-header/film-card-header';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { store } from '../../store';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilm } from '../../store/film-process/selectors';

function AddReview(): JSX.Element {
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchFilmAction({ id: params.id }));
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
          <AddReviewForm />
        </div>
      </section>
    );
  }
}

export default AddReview;
