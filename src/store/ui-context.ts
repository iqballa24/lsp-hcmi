/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

export type ContextObj = {
  isShowCalendar: boolean;
  isShowRegister: boolean;
  isShowNav: boolean;
  isShowStructure: boolean;
  toggleCalendar: () => void;
  toggleRegister: () => void;
  toggleNav: () => void;
  toggleStructure: () => void;
};

const UiContext = React.createContext<ContextObj>({
  isShowCalendar: false,
  toggleCalendar: () => {},
  isShowRegister: false,
  toggleRegister: () => {},
  isShowNav: false,
  toggleNav: () => {},
  isShowStructure: false,
  toggleStructure: () => {},
});

export default UiContext;
