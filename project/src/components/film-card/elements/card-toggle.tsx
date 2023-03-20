import CardPlayer from './card-player';
import CardPoster from './card-poster';
import {FilmCardProps} from '../film-card';

const CardToggle = ({name, previewImage, previewVideoLink, id, activeFilm}: Omit<FilmCardProps, 'onSetActiveFilm'>) => (
  activeFilm === id
    ? < CardPlayer previewVideoLink={previewVideoLink} previewImage={previewImage}/>
    : < CardPoster name={name} previewImage={previewImage} id={id}/>
);

export default CardToggle;
