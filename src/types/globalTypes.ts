export type FormValues = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
};
export type IBooks = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: [];
};
export interface BookData {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
}
