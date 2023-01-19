import React from 'react';
import { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({
  className,
  isCenteredContent,
  children,
}) => {
  const classes = ['section'];

  classes.push(className);
  if (isCenteredContent) classes.push('text-center');

  return <section className={classes.join(' ')}>{children}</section>;
};

export default Section;
