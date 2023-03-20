export type PromoFilmProps = {
  name: string;
  genre: string;
  year: number;
  id: number;
};

export type ReviewProps = {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export type ReviewsProps = ReviewProps[];

export type Film = {
  name: string;
  previewImage: string;
  previewVideoLink: string;
  id: number;
};

export type Films = Film[];
