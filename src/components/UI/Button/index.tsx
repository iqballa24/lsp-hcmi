import React from 'react';
import { ButtonProps } from '@/types';

const Button: React.FC<ButtonProps> = ({
  id,
  className,
  ariaLabel,
  isPrimary,
  isSecondary,
  isFloat,
  isSkema,
  isPdf,
  children,
  onClick
}) => {
  const classes = ['button'];
  classes.push(className);

  if (isPrimary) classes.push('button-primary');
  if (isSecondary) classes.push('button-secondary');
  if (isSkema) classes.push('button-skema');
  if (isPdf) classes.push('button-pdf');
  if (isFloat) classes.push('button-float');

  return (
    <button id={id} className={classes.join(' ')} aria-label={ariaLabel ?? ''} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
