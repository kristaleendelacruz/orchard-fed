import { ArticleT } from '../../types';
import ArticleItem from './ArticleItem';

interface IProps {
  title: string;
  items: ArticleT[];
}

const LatestArticlesList = ({ title, items }: IProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl md:text-4xl uppercase py-8">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ArticleItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default LatestArticlesList;
