import { FooterT, ImageT } from '../../types';
import MainArticleImage from './MainArticleImage';

interface IProps {
  title: string;
  content: string;
  footer: FooterT;
  images: ImageT[];
}
const MainArticle = ({ title, content, footer, images }: IProps) => {
  const [firstImage, ...restImages] = images;
  return (
    <section id="main-article" className="flex flex-row gap-8 max-xl:flex-col">
      <div className="flex gap-4 max-xl:justify-center">
        <div>{firstImage && <MainArticleImage {...firstImage} />}</div>
        <div className="flex flex-col gap-4">
          {restImages.map((image) => (
            <MainArticleImage key={image.id} {...image} />
          ))}
        </div>
      </div>
      <div className="w-[40%] max-xl:w-full">
        <div className="border-b-2 pb-4">
          <h1 className="uppercase text-lg md:text-3xl">{title}</h1>
        </div>
        <p className="py-8 text-sm md:text-xl text-gray-700 dark:text-gray-400">
          {content}
        </p>
        <div>
          <div className="text-red-500 uppercase py-4 text-sm md:text-xl">
            {footer.title}
          </div>
          <p className="font-semibold text-sm md:text-xl">{footer.content}</p>
        </div>
      </div>
    </section>
  );
};

export default MainArticle;
