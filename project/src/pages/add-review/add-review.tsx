import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import FilmCardHeader from '../../components/film-card-header/film-card-header';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { films } from '../../mocks/film-info';

function AddReview(): JSX.Element {
  const params = useParams();
  const film = films.find((element) => element.id.toString() === params.id);
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
