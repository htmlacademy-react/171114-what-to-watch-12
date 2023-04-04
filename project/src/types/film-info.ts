export type PromoFilmProps = {
  name: string;
  genre: string;
  year: number;
  id: number;
};

export type ReviewProps = {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export type ReviewsProps = ReviewProps[];

export type FilmCardProps = {
  name: string;
  previewImage: string;
  previewVideoLink: string;
  id: number;
};

export type FilmCards = FilmCardProps[];

export type Film = {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  id: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
};

export type Films = Film[];
