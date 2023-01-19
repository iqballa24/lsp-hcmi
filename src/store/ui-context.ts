/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

export type ContextObj = {
  isShowCalendar: boolean;
  isShowRegister: boolean;
  isShowNav: boolean;
  toggleCalendar: () => void;
  toggleRegister: () => void;
  toggleNav: () => void;
};

const UiContext = React.createContext<ContextObj>({
  isShowCalendar: false,
  toggleCalendar: () => {},
  isShowRegister: false,
  toggleRegister: () => {},
  isShowNav: false,
  toggleNav: () => {},
});

export default UiContext;
