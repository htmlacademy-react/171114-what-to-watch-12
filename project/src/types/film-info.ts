export type PromoFilmProps = {
  title: string;
  genre: string;
  year: number;
};

export type SmallCardProps = {
  title: string;
  img: string;
  id: string;
};

export type Films = SmallCardProps[];
