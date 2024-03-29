import { useState } from 'react';
import { FilmCardProps } from '../../types/film-info';
import CardPlayer from './elements/card-player';
import CardPoster from './elements/card-poster';
import { TIME_OUT_DELAY } from '../../const';
import { Link } from 'react-router-dom';

function FilmCard({
  name,
  previewImage,
  id,
  previewVideoLink
}: FilmCardProps): JSX.Element {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => setVideoPlaying(true), TIME_OUT_DELAY);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setVideoPlaying(false);
  };

  const renderFilm = (): JSX.Element => {
    if (isVideoPlaying) {
      return (
        <CardPlayer
          previewVideoLink={previewVideoLink}
          previewImage={previewImage}
          name={name}
          id={id}
        />
      );
    }
    return <CardPoster name={name} previewImage={previewImage} id={id} />;
  };

  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderFilm()}
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}/`} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
