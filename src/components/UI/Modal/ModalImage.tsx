import React from 'react';
import Container from '@/components/UI/Modal/Container';

import { ModalImageProps } from '@/types';

const ModalImage: React.FC<ModalImageProps> = ({ altText, toggleModal, image }) => {
  return (
    <Container className="">
      <span
        className="close cursor"
        onClick={toggleModal}
        aria-label={`close ${altText}`}
      >
        &times;
      </span>
      <div className="modal-content">
        <img
          src={image}
          alt={altText}
          style={{ width: 100 + '%' }}
          loading="lazy"
        />
      </div>
    </Container>
  );
};

export default React.memo(ModalImage);
