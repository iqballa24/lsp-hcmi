import React from 'react';
import ReactDOM from 'react-dom';

import { ContainerModalProps } from '@/types';

const portalElement = document.getElementById('overlays') as HTMLElement;

const Container: React.FC<ContainerModalProps> = ({
  className,
  children,
  isRegister,
}) => {
  const classes = [''];
  classes.push(className);

  isRegister ? classes.push('modal-daftar') : classes.push('modal-box');

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.join('')}>{children}</div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Container;
