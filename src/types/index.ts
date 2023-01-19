import React from 'react';

export type ButtonProps = {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isSkema?: boolean;
  isPdf?: boolean;
  isFloat?: boolean;
  className: string;
  id: string;
  ariaLabel?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export type SectionProps = {
  className: string;
  isCenteredContent?: boolean;
  children: React.ReactNode;
};

export type CardProps = {
  className: string;
  children: React.ReactNode;
};

export type ContainerModalProps = {
  className: string;
  isRegister?: boolean;
  children: React.ReactNode;
};

export type ModalImageProps = {
  altText: string;
  toggleModal: () => void;
  image: string;
};

export type columnTypes = {
  id: number;
  title: string;
};

export type dataTableTypes = {
  id: number;
  kode: string;
  title: string;
};

export type TableProps = {
  column: columnTypes[];
  data: dataTableTypes[];
};

export type schemeContainerProps = {
  columnTable: columnTypes[];
  dataTable: dataTableTypes[];
  title: string;
  desc: string;
  filePdf: string;
};
