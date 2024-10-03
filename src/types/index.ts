export type FooterT = {
  title: string;
  content: string;
};

export type ImageT = {
  id: number;
  src: string;
  srcLarge: string;
  alt: string;
};

export type ArticleT = {
  id: number;
  title: string;
  content: string;
  image: ImageT;
};
