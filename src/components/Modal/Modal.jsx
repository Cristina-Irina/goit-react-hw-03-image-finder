import { Component } from 'react';
import { ModalBackdrop, ModalContent, ModalImage } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClickESC);
  }

  handleClickESC = e => {
    if (e.code === `Escape`) {
      this.props.toggleModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClickESC);
  }

  //ModalBackdrop, ModalContent, ModalImage
  render() {
    const { imageURL, imageTags, toggleModal } = this.props;
    return (
      <ModalBackdrop onClick={toggleModal}>
        <ModalContent>
          <ModalImage src={imageURL} alt={imageTags} />
        </ModalContent>
      </ModalBackdrop>
    );
  }
}
