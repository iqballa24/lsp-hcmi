import React from 'react';
import Container from '@/components/UI/Modal/Container';

import { ModalCalendarProps } from '@/types';

const ModalCalendar: React.FC<ModalCalendarProps> = ({
  toggleCalendar,
  image,
}) => {
  return (
    <Container className="">
      <span className="close cursor" onClick={toggleCalendar}>
        &times;
      </span>
      <div className="modal-content">
        <img
          src={image}
          alt="calendar"
          style={{ width: 100 + '%' }}
          loading="lazy"
        />
      </div>
    </Container>
  );
};

export default React.memo(ModalCalendar);
