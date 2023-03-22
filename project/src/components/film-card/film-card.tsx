import { Link } from 'react-router-dom';
import { Film } from '../../types/film-info';
import cls from './film-card.module.css';
import CardPlayer from './elements/card-player';
import CardPoster from './elements/card-poster';
import { useState } from 'react';

export type FilmCardProps = Film;

const TIME_OUT_DELAY = 1000;

function FilmCard({
  name,
  previewImage,
  id,
  previewVideoLink,
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
      <Link to={`/films/${id}/`} className={cls.wrapper}>
        {renderFilm()}
      </Link>
    </article>
  );
}

export default FilmCard;
