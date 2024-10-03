import { ArticleT } from '../../types';
import CustomImage from '../common/CustomImage';

import './ArticleItem.css';

const IMG_PATH = '/images/component-02/';

const ArticleItem = ({ id, title, content, image }: ArticleT) => {
  const sectionId = `article-${id}`;
  const handleClick = () => console.log('Section clicked: ', sectionId);

  return (
    <a
      href={`#${sectionId}`}
      className="article-item text-inherit hover:text-inherit"
      onClick={handleClick}
    >
      <div id={sectionId} className="flex flex-col gap-6">
        <div className="img-wrapper flex justify-center border-b-4 border-red-600">
          <CustomImage dir={IMG_PATH} {...{ image }} />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-base md:text-lg font-semibold">{title}</h2>
          <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">
            {content}
          </p>
        </div>
        <div>
          <span className="text-sm md:text-base read-more uppercase font-bold border-b-2 border-red-600 pb-2">
            Read more
          </span>
        </div>
      </div>
    </a>
  );
};

export default ArticleItem;
