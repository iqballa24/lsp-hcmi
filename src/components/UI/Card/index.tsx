import React from 'react';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ className, children }) => {
  const classes = ['card'];
  classes.push(className);

  return <div className={classes.join(' ')}>{children}</div>;
};

export default Card;
