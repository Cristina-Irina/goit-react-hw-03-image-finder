import { GalleryItem, ImageStyle } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, toggleModal }) => {
  return images.map(image => (
    <GalleryItem
      key={image.id}
      onClick={e => toggleModal(image.largeImageURL, image.tags)}
    >
      <ImageStyle src={image.webformatURL} alt={image.tags} loading="lazy" />
    </GalleryItem>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
