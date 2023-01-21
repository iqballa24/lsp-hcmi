import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const Toast: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div id="notif-info" className="notif-info show" aria-label={message}>
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{ fontSize: 1.6 + 'rem', color: '#E74C3C' }}
      />{' '}
      {message}
    </div>
  );
};

export default Toast;
