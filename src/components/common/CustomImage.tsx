import { ImageT } from '../../types';

interface IProps {
  dir: string; // The path for the image
  image: ImageT;
  isLarge?: boolean;
  handleClick?: () => void;
}

const CustomImage = ({ dir, image, isLarge = false, handleClick }: IProps) => (
  <img
    src={`${dir}${isLarge ? image.srcLarge : image.src}`}
    alt={image.alt}
    {...(handleClick ? { onClick: handleClick } : {})}
  />
);

export default CustomImage;
