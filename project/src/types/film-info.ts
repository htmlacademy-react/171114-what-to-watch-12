export type PromoFilmProps = {
  name: string;
  genre: string;
  year: number;
  id: number;
};

export type Film = {
  name: string;
  previewImage: string;
  id: number;
};

export type Films = Film[];
