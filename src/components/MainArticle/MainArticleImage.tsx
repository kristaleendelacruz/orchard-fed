import { useState } from 'react';
import { ImageT } from '../../types';
import CustomImage from '../common/CustomImage';
import CustomModal from '../common/CustomModal';

const IMG_PATH = '/images/component-01/';

const MainArticleImage = (image: ImageT) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <>
      <CustomModal
        isOpen={openModal}
        onClose={handleCloseModal}
        content={<CustomImage dir={IMG_PATH} isLarge {...{ image }} />}
      />
      <CustomImage
        dir={IMG_PATH}
        {...{ image }}
        handleClick={handleOpenModal}
      />
    </>
  );
};

export default MainArticleImage;
