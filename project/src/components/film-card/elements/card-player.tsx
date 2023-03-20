import {FilmCardProps} from '../film-card';

const CardPlayer = ({previewVideoLink, previewImage}: Pick<FilmCardProps, 'previewVideoLink' | 'previewImage'>) => (
  <div className="small-film-card__image">
    <video
      poster={previewImage}
      autoPlay
      width="280"
      height="175"
    >
      <source src={previewVideoLink}/>
    </video>
  </div>
);

export default CardPlayer;
